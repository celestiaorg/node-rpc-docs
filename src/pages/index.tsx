/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from '@headlessui/react';
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import Seo from '@/components/Seo';

const clients = [
  {
    name: 'Golang',
    href: 'https://github.com/celestiaorg/celestia-node/blob/main/api/rpc/client/client.go',
    current: false,
  },
];

const jsonURL =
  'https://raw.githubusercontent.com/celestiaorg/celestia-node/openrpc-spec/openrpc.json';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

type Param = {
  name: string;
  description: string;
  schema: any;
};

type Method = {
  name: string;
  description: string;
  auth: string;
  params: Param[];
  result: Param;
};

type MethodByPkg = { [key: string]: Method[] };

function extractAuth(methodDescription: string): string {
  return methodDescription.split('Auth level: ')[1];
}

function getMethodsByPackage(spec: any): MethodByPkg {
  const methodsByPackage: MethodByPkg = {};
  for (const method of spec.methods) {
    const methodName = method.name.split('.');
    const pkg = methodName[0];
    const name = methodName[1];
    if (!methodsByPackage[pkg]) {
      methodsByPackage[pkg] = [
        {
          name: name,
          description: method.summary,
          params: method.params,
          auth: extractAuth(method.description),
          result: method.result,
        },
      ];
    } else {
      methodsByPackage[pkg].push({
        name: name,
        description: method.summary,
        params: method.params,
        auth: extractAuth(method.description),
        result: method.result,
      });
    }
  }
  return methodsByPackage;
}

export default function Example() {
  const [spec, setSpec] = useState<any>();
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentParam, setCurrentParam] = useState<Param>({
    name: '',
    description: '',
    schema: {},
  });

  useEffect(() => {
    const fetchJsonData = async (url: string) => {
      try {
        const response = await axios.get(url);
        setSpec(response.data);
      } catch (error) {
        // console.error('Error fetching JSON data:', error);
      }
    };

    fetchJsonData(jsonURL);
  }, []);

  const activateSidebar = (param: any) => {
    setOpen(true);
    setCurrentParam(param);
  };

  return (
    <>
      <Seo />
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-40 md:hidden'
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>

            <div className='fixed inset-0 z-40 flex'>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <Dialog.Panel className='relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute top-0 right-0 -mr-12 pt-2'>
                      <button
                        type='button'
                        className='ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className='sr-only'>Close sidebar</span>
                        <XMarkIcon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className='flex flex-shrink-0 items-center px-4'>
                    <img
                      className='h-8 w-auto'
                      src='/images/celestia-logo-purple.png'
                      alt='Celestia Logo'
                    />
                  </div>
                  <div className='mt-5 h-0 flex-1 overflow-y-auto'>
                    <nav className='space-y-1 px-2'>
                      <a className='text-md'>Celestia Node API</a>
                      {spec &&
                        Object.entries(getMethodsByPackage(spec)).map(
                          ([pkg, methods]) => (
                            <a
                              key={pkg}
                              href={`/#${pkg}`}
                              className='group flex items-center rounded-md bg-gray-100 py-2 px-2 text-base font-light capitalize text-gray-900'
                            >
                              {pkg == 'p2p' ? 'P2P' : pkg}
                            </a>
                          )
                        )}
                      <div className='pt-4'>
                        <a className='text-md'>Clients</a>
                      </div>
                      {clients.map((client) => (
                        <a
                          key={client.name}
                          href={client.href}
                          className='group flex items-center rounded-md bg-gray-100 py-2 px-2 text-base font-light capitalize text-gray-900'
                        >
                          {client.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className='w-14 flex-shrink-0'>
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className='hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5'>
            <div className='flex flex-shrink-0 items-center px-2'>
              <img
                className='w-full px-4'
                src='/images/celestia-logo-purple.png'
                alt='Celestia Logo'
              />
            </div>
            <div className='mt-5 flex flex-grow flex-col'>
              <nav className='flex-1 space-y-1 px-2 pb-4'>
                <a className='group flex items-center rounded-md px-2 text-base font-medium text-gray-900'>
                  Celestia Node API
                </a>
                {spec &&
                  Object.entries(getMethodsByPackage(spec)).map(
                    ([pkg, methods]) => (
                      <a
                        key={pkg}
                        href={'#' + pkg}
                        // className='group ml-4 flex items-center rounded-md px-2 text-base text-gray-700'
                        className='group ml-2 flex items-center rounded-md px-2 text-sm font-medium capitalize text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      >
                        {pkg == 'p2p' ? 'P2P' : pkg}
                      </a>
                    )
                  )}
                <a className='group flex items-center rounded-md px-2 pt-4 text-base font-medium text-gray-900'>
                  Clients
                </a>
                {clients.map((client) => (
                  <a
                    key={client.name}
                    href={client.href}
                    className={classNames(
                      client.current
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group ml-2 flex items-center rounded-md px-2 text-sm font-medium'
                    )}
                  >
                    {client.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className='md:pl-64'>
          <div className='mx-auto flex max-w-4xl flex-col md:px-8 xl:px-0'>
            <div className='sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white md:hidden'>
              <button
                type='button'
                className='border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
                onClick={() => setSidebarOpen(true)}
              >
                <span className='sr-only'>Open sidebar</span>
                <Bars3BottomLeftIcon className='h-6 w-6' aria-hidden='true' />
              </button>
              <h1 className='my-auto ml-2 font-[ruberoid] text-xl font-semibold text-gray-900 sm:text-3xl md:hidden'>
                {spec && spec.info.title}
              </h1>
            </div>

            <main className='flex-1'>
              <div className='py-6'>
                <div className='px-4 sm:px-6 md:px-0'>
                  <div className='lg:flex'>
                    <div className='flex'>
                      <img
                        src='/images/icon-1.png'
                        className='h-16'
                        alt='Celestia block'
                      />
                      <h1 className='my-auto ml-2 hidden font-[ruberoid] text-xl font-semibold text-gray-900 sm:text-3xl md:block'>
                        {spec && spec.info.title}
                      </h1>
                      <span className='my-auto ml-4 inline-flex h-8 items-center rounded-full bg-purple-100 px-3 py-0.5 text-sm font-medium text-purple-800'>
                        {spec && spec.info.version}
                      </span>
                    </div>
                    <div className='ml-auto flex'>
                      <a href='https://discord.com/invite/YsnTPcSfWQ'>
                        <img
                          src='/images/discord.svg'
                          className='my-auto h-12'
                          alt='Discord Logo'
                        />
                      </a>
                      <a href='https://github.com/celestiaorg/celestia-node'>
                        <img
                          src='/images/github.svg'
                          className='my-auto h-12'
                          alt='Github Logo'
                        />
                      </a>
                    </div>
                  </div>
                  <h2 className='mt-2 text-base font-normal text-gray-700'>
                    {spec && spec.info.description}
                  </h2>
                </div>
                <div className='px-4 sm:px-6 md:px-0'>
                  {/* Replace with your content */}
                  <div className='py-4'>
                    {spec &&
                      Object.entries(getMethodsByPackage(spec)).map(
                        ([pkg, methods]) => (
                          <div key={pkg} className='pb-6' id={pkg}>
                            <h3 className='font-[ruberoid] text-2xl font-bold uppercase'>
                              {pkg}
                            </h3>
                            {methods.map((method) => (
                              <RPCMethod
                                key={`${pkg}.${method.name}`}
                                pkg={pkg}
                                method={method}
                                activateSidebar={activateSidebar}
                              />
                            ))}
                          </div>
                        )
                      )}
                  </div>
                  {/* /End replace */}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <Dialog.Panel className='relative transform rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
                  <div className='absolute top-0 right-0 hidden pt-4 pr-4 sm:block'>
                    <button
                      type='button'
                      className='rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      onClick={() => setOpen(false)}
                    >
                      <span className='sr-only'>Close</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>
                  <div className='overflow-x-auto sm:flex sm:items-start'>
                    <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                      <Dialog.Title
                        as='h3'
                        className='text-lg font-medium leading-6 text-gray-900'
                      >
                        {currentParam.description}
                      </Dialog.Title>
                      <div className='mt-2'>
                        {currentParam.schema?.examples &&
                          currentParam.schema.examples.length > 0 && (
                            <p className='text-sm text-gray-500'>
                              Example Value:
                              <SyntaxHighlighter
                                language='javascript'
                                customStyle={{
                                  backgroundColor: 'transparent',
                                }}
                              >
                                {JSON.stringify(
                                  currentParam.schema.examples[0],
                                  null,
                                  '\t'
                                )}
                              </SyntaxHighlighter>
                            </p>
                          )}
                      </div>
                    </div>
                  </div>
                  <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
                    <button
                      type='button'
                      className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm'
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

const RPCMethod = ({
  pkg,
  method,
  activateSidebar,
}: {
  pkg: string;
  method: Method;
  activateSidebar: (param: Param) => void;
}) => {
  const [showRequest, setShowRequest] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  return (
    <div key={method.name} className='py-2'>
      <p className='text-md'>
        {method.name}(
        {method.params.map((param, i, { length }) => (
          <span key={param.name} className='text-sm text-gray-700'>
            <span>{param.name}</span>{' '}
            <span
              className='text-blue-500 hover:cursor-pointer hover:font-bold'
              onClick={() => activateSidebar(param)}
            >
              {param.description}
              {length - 1 != i && ', '}
            </span>
          </span>
        ))}
        )
        {method.result.description != 'Null' && (
          <span
            className='ml-2 text-sm text-blue-500 hover:cursor-pointer hover:font-bold'
            onClick={() => activateSidebar(method.result)}
          >
            {method.result.description}
          </span>
        )}
        <span className='ml-2 inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800'>
          perms: {method.auth}
        </span>
      </p>
      <p className='text-sm font-light text-gray-700'>{method.description}</p>
      <div className='mt-6 overflow-hidden rounded-lg bg-white text-sm shadow'>
        <div
          className='flex px-4 py-5 hover:cursor-pointer hover:bg-gray-50 sm:px-6'
          onClick={() => setShowRequest(!showRequest)}
        >
          {showRequest ? (
            <ChevronDownIcon className='mr-2 h-5 w-5' aria-hidden='true' />
          ) : (
            <ChevronRightIcon className='mr-2 h-5 w-5' aria-hidden='true' />
          )}
          Request
        </div>
        {showRequest && (
          <div className='bg-gray-50 px-4 py-5 text-sm sm:p-6'>
            <SyntaxHighlighter
              language='javascript'
              customStyle={{
                backgroundColor: 'transparent',
              }}
            >
              {JSON.stringify(
                {
                  id: 1,
                  jsonrpc: '2.0',
                  method: pkg + '.' + method.name,
                  params: method.params.map((param) =>
                    param.schema && param.schema.examples
                      ? param.schema.examples[0]
                      : undefined
                  ),
                },
                null,
                2
              )}
            </SyntaxHighlighter>
          </div>
        )}
        <div
          className='flex px-4 py-5 hover:cursor-pointer hover:bg-gray-50 sm:px-6'
          onClick={() => setShowResponse(!showResponse)}
        >
          {showResponse ? (
            <ChevronDownIcon className='mr-2 h-5 w-5' aria-hidden='true' />
          ) : (
            <ChevronRightIcon className='mr-2 h-5 w-5' aria-hidden='true' />
          )}{' '}
          Response
        </div>
        {showResponse && (
          <div className='bg-gray-50 px-4 py-5 text-sm sm:p-6'>
            <SyntaxHighlighter
              language='javascript'
              customStyle={{
                backgroundColor: 'transparent',
              }}
            >
              {JSON.stringify(
                {
                  id: 1,
                  jsonrpc: '2.0',
                  result:
                    method.result.description == 'Null' ||
                    !method.result.schema.examples
                      ? []
                      : [method.result.schema.examples[0]],
                },
                null,
                2
              )}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
};
