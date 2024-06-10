import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { CommandLineIcon } from '@heroicons/react/24/solid';
import { Editor } from '@monaco-editor/react';
import axios from 'axios';
import { AxiosError } from 'axios';
import {
  RequestManager,
  Client,
  WebSocketTransport,
} from '@open-rpc/client-js';
import { useState } from 'react';

import { classNames } from '@/lib/helper';
import { INotification, NodeError } from '@/lib/types';

const tabs = [
  { name: 'Request', href: '#' },
  { name: 'Response', href: '#' },
  { name: 'Configuration', href: '#' },
];

const sendRequest = async (
  request: string,
  hostname: string,
  authtoken: string
): Promise<object> => {
  const transport = new WebSocketTransport('ws://localhost:26658');
  const requestManager = new RequestManager([transport]);
  const client = new Client(requestManager);

  if (hostname == '') {
    hostname = 'http://localhost:26658';
  } else {
    hostname = 'http://' + hostname;
  }

  if (authtoken != '') {
    axios.defaults.headers.common['Authorization'] = `Bearer ${authtoken}`;
  }

  // I know, this looks stupid, but it's the easiest way to display the response without writing a custom WS client
  const { method, params } = JSON.parse(request);
  const response = await client.request({ method, params });
  return { id: 1, jsonrpc: '2.0', result: response };
};

const Playground = ({
  playgroundOpen,
  currentRequest,
  setPlaygroundOpen,
  setCurrentRequest,
  setNotification,
}: {
  playgroundOpen: boolean;
  currentRequest: string;
  setPlaygroundOpen: (open: boolean) => void;
  setCurrentRequest: (request: string) => void;
  setNotification: (notification: INotification) => void;
}) => {
  const [hostname, setHostname] = useState('');
  const [authToken, setAuthToken] = useState('');
  // request: 0, response: 1, config: 2
  const [currentTab, setCurrentTab] = useState(0);
  const [currentResponse, setCurrentResponse] = useState<string>('');

  return (
    <Transition show={playgroundOpen}>
      <Dialog className='relative' onClose={setPlaygroundOpen}>
        <TransitionChild
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='pointer-events-none fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </TransitionChild>

        <div className='pointer-events-none fixed inset-0 w-screen overflow-y-auto'>
          <div className='pointer-events-auto flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <TransitionChild
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <DialogPanel className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6'>
                <div className='sm:flex-grow'>
                  <div className='flex'>
                    <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 sm:mx-0 sm:h-10 sm:w-10'>
                      <CommandLineIcon
                        className='h-6 w-6 text-purple-600'
                        aria-hidden='true'
                      />
                    </div>
                    <DialogTitle
                      as='h3'
                      className='ml-3 mt-2 text-base font-semibold text-gray-900'
                    >
                      Node Playground
                    </DialogTitle>
                  </div>
                  <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                    <div className='mt-2 flex-grow flex-row'>
                      {/* TABS */}
                      <div className='sm:hidden'>
                        <label htmlFor='tabs' className='sr-only'>
                          Select a tab
                        </label>
                        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                        <select
                          id='tabs'
                          name='tabs'
                          className='block w-full rounded-md border-gray-300 focus:border-purple-500 focus:ring-purple-500'
                          value={tabs[currentTab].name}
                          onChange={(e) => {
                            switch (e.currentTarget.value) {
                              case 'Request':
                                setCurrentTab(0);
                                break;
                              case 'Response':
                                setCurrentTab(1);
                                break;
                              case 'Configure':
                                setCurrentTab(2);
                                break;
                              default:
                                setCurrentTab(0);
                                break;
                            }
                          }}
                        >
                          {tabs.map((tab) => (
                            <option key={tab.name}>{tab.name}</option>
                          ))}
                        </select>
                      </div>
                      <div className='hidden flex-grow sm:block'>
                        <nav
                          className='isolate flex divide-x divide-gray-200 rounded-lg shadow'
                          aria-label='Tabs'
                        >
                          {tabs.map((tab, tabIdx) => (
                            <a
                              key={tab.name}
                              href={tab.href}
                              onClick={(_) => setCurrentTab(tabIdx)}
                              className={classNames(
                                currentTab == tabIdx
                                  ? 'text-gray-900'
                                  : 'text-gray-500 hover:text-gray-700',
                                tabIdx === 0 ? 'rounded-l-lg' : '',
                                tabIdx === tabs.length - 1
                                  ? 'rounded-r-lg'
                                  : '',
                                'group relative min-w-0 flex-1 overflow-hidden bg-white px-4 py-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10'
                              )}
                              aria-current={
                                currentTab == tabIdx ? 'page' : undefined
                              }
                            >
                              <span>{tab.name}</span>
                              <span
                                aria-hidden='true'
                                className={classNames(
                                  currentTab == tabIdx
                                    ? 'bg-purple-500'
                                    : 'bg-transparent',
                                  'absolute inset-x-0 bottom-0 h-0.5'
                                )}
                              />
                            </a>
                          ))}
                        </nav>
                      </div>
                      {/* PLAYGROUND */}
                      {
                        {
                          0: (
                            <div>
                              <Editor
                                language='json'
                                options={{
                                  scrollBeyondLastLine: false,
                                  minimap: { enabled: false },
                                  useShadows: false,
                                }}
                                className='mt-3 min-h-52'
                                value={currentRequest}
                                onChange={(value) =>
                                  value && setCurrentRequest(value)
                                }
                              />
                            </div>
                          ),
                          1: (
                            <div>
                              {currentTab == 1 && (
                                <Editor
                                  language='json'
                                  options={{
                                    scrollBeyondLastLine: false,
                                    minimap: { enabled: false },
                                    useShadows: false,
                                    readOnly: true,
                                  }}
                                  className='mt-3 min-h-52'
                                  value={currentResponse}
                                />
                              )}
                            </div>
                          ),
                          2: (
                            <div>
                              <label
                                htmlFor='ip'
                                className='mt-6 block text-sm font-medium leading-6 text-gray-900'
                              >
                                IP Address
                              </label>
                              <div className='mt-2 flex rounded-md shadow-sm'>
                                <span className='inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm'>
                                  http://
                                </span>
                                <input
                                  type='text'
                                  name='ip'
                                  id='ip'
                                  className='block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                  placeholder='localhost:26658'
                                  value={hostname}
                                  onChange={(e) => setHostname(e.target.value)}
                                />
                              </div>
                              <p
                                className='mt-2 text-sm text-gray-500'
                                id='protocol-description'
                              >
                                ws:// or wss:// is not supported at this time
                              </p>
                              <label
                                htmlFor='authtoken'
                                className='mt-6 block text-sm font-medium leading-6 text-gray-900'
                              >
                                Auth Token
                              </label>
                              <div className='mt-2 flex rounded-md shadow-sm'>
                                <input
                                  type='text'
                                  name='authtoken'
                                  id='authtoken'
                                  className='block w-full min-w-0 flex-1 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                  placeholder=''
                                  value={authToken}
                                  onChange={(e) => setAuthToken(e.target.value)}
                                />
                              </div>
                              <p
                                className='mt-2 text-sm text-gray-500'
                                id='auth-description'
                              >
                                Only set this if you don't have the
                                --rpc.skip-auth flag set.
                              </p>
                            </div>
                          ),
                        }[currentTab]
                      }
                    </div>
                  </div>
                </div>
                <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
                  <button
                    type='button'
                    className='mt-3 inline-flex w-full justify-center rounded-md bg-purple-100 px-3 py-2 text-sm font-semibold text-purple-900 shadow-sm ring-1 ring-inset ring-purple-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                    onClick={async () => {
                      try {
                        const data = await sendRequest(
                          currentRequest,
                          hostname,
                          authToken
                        );
                        setCurrentResponse(JSON.stringify(data, null, 2));
                        setCurrentTab(1);
                        if ('error' in data) {
                          setNotification({
                            active: true,
                            success: false,
                            message: (data.error as NodeError).message,
                          });
                        } else {
                          setNotification({
                            active: true,
                            success: true,
                            message: 'Request sent successfully',
                          });
                        }
                      } catch (e) {
                        setNotification({
                          active: true,
                          success: false,
                          message: (e as AxiosError).message,
                        });
                        return;
                      }
                    }}
                    data-autofocus
                  >
                    Send Request
                  </button>
                  <button
                    type='button'
                    className='mr-3 mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                    onClick={() => setPlaygroundOpen(false)}
                    data-autofocus
                  >
                    Dismiss
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default Playground;
