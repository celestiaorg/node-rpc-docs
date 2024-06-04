/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import {
  Bars3BottomLeftIcon,
  XMarkIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  CommandLineIcon,
} from '@heroicons/react/24/solid';
import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { useRef } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FiClipboard } from 'react-icons/fi';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Editor } from '@monaco-editor/react';
import Seo from '@/components/Seo';

const clients = [
  {
    name: 'Golang',
    href: 'https://github.com/celestiaorg/celestia-openrpc',
    current: false,
  },
  {
    name: 'Rust (Community)',
    href: 'https://github.com/eigerco/celestia-node-rs',
    current: false,
  },
  {
    name: 'Python (Community)',
    href: 'https://github.com/grumpyp/celestia-node-client-py',
    current: false,
  },
  {
    name: 'Typescript (Community)',
    href: 'https://github.com/ashishbhintade/cntsc',
    current: false,
  },
];

const tabs = [
  { name: 'Request', href: '#' },
  { name: 'Response', href: '#' },
  { name: 'Configuration', href: '#' },
];

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

const versions = [
  'v0.11.0-rc8',
  'rc8-0cf4a49',
  'v0.11.0-rc11',
  'v0.11.0-rc12',
  'v0.11.0-rc13',
  'v0.11.0-rc14',
  'v0.11.0',
  'v0.12.0',
  `v0.12.1`,
  `v0.12.2`,
  `v0.12.3`,
  `v0.12.4`,
  `v0.13.0`,
  `v0.13.1`,
  `v0.13.2`,
  `v0.13.3`,
  `v0.13.4`,
  `v0.13.5`,
].reverse();

interface INotification {
  message: string;
  success: boolean;
  active: boolean;
}

export default function Example() {
  const handleVersionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVersion(event.target.value);
    window.history.pushState({}, '', `?version=${event.target.value}`);
  };
  const [spec, setSpec] = useState<any>();
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentParam, setCurrentParam] = useState<Param>({
    name: '',
    description: '',
    schema: {},
  });

  const [currentRequest, setCurrentRequest] = useState<string>('');
  const [currentResponse, setCurrentResponse] = useState<string>('');
  const [playgroundOpen, setPlaygroundOpen] = useState(false);
  const [notification, setNotification] = useState<INotification>({
    message: '',
    success: true,
    active: false,
  });

  // request: 0, response: 1, config: 2
  const [currentTab, setCurrentTab] = useState(0);
  const [selectedVersion, setSelectedVersion] = useState(versions[0]);
  const [showHash, setShowHash] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchJsonData = async (version: string) => {
      try {
        const response = await axios.get(`/specs/openrpc-${version}.json`);
        setSpec(response.data);
        const hash = window.location.hash;
        window.history.replaceState({}, '', `?version=${version}${hash}`);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching JSON data:', error);
      }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const versionParam = urlParams.get('version');
    if (versionParam && versions.includes(versionParam)) {
      setSelectedVersion(versionParam);
    } else {
      setSelectedVersion(versions[0]);
    }

    fetchJsonData(selectedVersion);
  }, [selectedVersion]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const versionParam = urlParams.get('version');
    if (versionParam && versions.includes(versionParam)) {
      setSelectedVersion(versionParam);
    }
  }, []);

  useEffect(() => {
    if (spec) {
      setTimeout(() => {
        const hash = window.location.hash.substring(1);
        const element = document.getElementById(hash);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }
      }, 1000);
    }
  }, [spec]);

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
                <Dialog.Panel className='relative flex w-full max-w-xs flex-1 flex-col bg-white pb-4 pt-5'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-300'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <div className='absolute right-0 top-0 -mr-12 pt-2'>
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
                  <div className='logo-container border-b border-gray-200 pb-4 md:border-none md:pb-0'>
                    <div className='flex flex-shrink-0 items-center px-4'>
                      <img
                        className='h-8 w-auto'
                        src='/images/celestia-docs.svg'
                        alt='Celestia Logo'
                      />
                    </div>
                  </div>
                  <div className='mt-5 h-0 flex-1 overflow-y-auto'>
                    <nav className='space-y-1 px-2'>
                      <a className='text-md mx-2'>Celestia Node API</a>
                      {spec &&
                        Object.entries(getMethodsByPackage(spec)).map(
                          ([pkg, methods]) => (
                            <a
                              key={pkg}
                              href={`/?version=${selectedVersion}#${pkg}`}
                              className='group mx-4 flex items-center rounded-md bg-gray-100 px-2 py-2 text-base font-light capitalize text-gray-900'
                              onMouseEnter={() => setShowHash(pkg)}
                              onMouseLeave={() => setShowHash('')}
                              onClick={() => setSidebarOpen(false)}
                            >
                              {pkg == 'p2p' ? 'P2P' : pkg}
                              {showHash === pkg && (
                                <CopyToClipboard
                                  text={`${window.location.origin}/?version=${selectedVersion}#${pkg}`}
                                >
                                  <span className='ml-2 cursor-pointer text-gray-500 hover:text-blue-500'>
                                    <FiClipboard />
                                  </span>
                                </CopyToClipboard>
                              )}
                            </a>
                          )
                        )}
                      <div className='pt-4'>
                        <a className='text-md mx-2'>Clients</a>
                      </div>
                      {clients.map((client) => (
                        <a
                          key={client.name}
                          href={client.href}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='group mx-4 flex items-center rounded-md bg-gray-100 px-2 py-2 text-base font-light capitalize text-gray-900'
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
        <div className='relative hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5'>
            <div className='logo-container grid border-b border-gray-200 pb-4 shadow md:pb-0'>
              <div className='px-4'>
                <div className='flex flex-shrink-0 items-center '>
                  <img
                    className='pb-2'
                    src='/images/celestia-docs.svg'
                    alt='Celestia Logo'
                  />
                </div>
                <input
                  type='text'
                  placeholder='Search modules & methods...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='mb-4 mt-4 w-full rounded border border-gray-300 py-1 text-sm shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500'
                />
              </div>
            </div>
            <div className='mt-5 flex flex-grow flex-col'>
              <nav className='flex-1 space-y-1 px-2 pb-4'>
                <a className='group ml-2 flex items-center rounded-md px-2 text-base font-medium text-gray-900'>
                  Celestia Node API
                </a>
                {spec &&
                  Object.entries(getMethodsByPackage(spec))
                    .filter(
                      ([pkg, methods]) =>
                        pkg.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        methods.some((method) =>
                          method.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                        )
                    )
                    .map(([pkg, methods]) => (
                      <a
                        key={pkg}
                        href={'#' + pkg}
                        className='group ml-4 flex items-center rounded-md px-2 text-sm font-medium capitalize text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      >
                        {pkg == 'p2p' ? 'P2P' : pkg}
                      </a>
                    ))}
                {searchTerm &&
                  spec &&
                  Object.entries(getMethodsByPackage(spec)).filter(
                    ([pkg, methods]) =>
                      pkg.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      methods.some((method) =>
                        method.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      )
                  ).length === 0 && (
                    <p className='ml-4 text-sm text-gray-600'>
                      👀 no modules or methods found
                    </p>
                  )}
                <a className='group ml-2 flex items-center rounded-md px-2 pt-4 text-base font-medium text-gray-900'>
                  Clients
                </a>
                {clients.map((client) => (
                  <a
                    key={client.name}
                    href={client.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classNames(
                      client.current
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group ml-4 flex items-center rounded-md px-2 text-sm font-medium'
                    )}
                  >
                    {client.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className='absolute bottom-0 left-0 mb-4 ml-4 flex space-x-4'>
            <a href='/'>
              <img
                src='/images/icon-1.png'
                className='hidden h-10 sm:block lg:hidden'
                alt='Celestia block'
              />
            </a>
            <a href='https://discord.com/invite/YsnTPcSfWQ'>
              <img
                src='/images/discord.svg'
                className='h-10'
                alt='Discord Logo'
              />
            </a>
            <a href='https://github.com/celestiaorg/celestia-node'>
              <img
                src='/images/github.svg'
                className='h-10'
                alt='Github Logo'
              />
            </a>
          </div>
        </div>

        <div className='md:pl-64'>
          <div className='mx-auto flex max-w-4xl flex-col md:px-8 xl:px-0'>
            <div className='sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white md:hidden'>
              <button
                type='button'
                className='border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 md:hidden'
                onClick={() => setSidebarOpen(true)}
              >
                <span className='sr-only'>Open sidebar</span>
                <Bars3BottomLeftIcon className='h-6 w-6' aria-hidden='true' />
              </button>
              <h1 className='my-auto ml-4 font-[ruberoid] text-xl font-semibold text-gray-900 sm:text-3xl md:hidden'>
                {spec && spec.info.title}
              </h1>
              <div className='ml-auto flex items-center space-x-4'>
                <a href='/' className='hidden 400:block'>
                  <img
                    src='/images/icon-1.png'
                    className='h-8'
                    alt='Celestia block'
                  />
                </a>
                <a
                  href='https://discord.com/invite/YsnTPcSfWQ'
                  className='hidden 400:block'
                >
                  <img
                    src='/images/discord.svg'
                    className='h-8'
                    alt='Discord Logo'
                  />
                </a>
                <a href='https://github.com/celestiaorg/celestia-node'>
                  <img
                    src='/images/github.svg'
                    className='h-8'
                    alt='Github Logo'
                  />
                </a>
              </div>
            </div>

            <main className='flex-1'>
              <div className='py-6'>
                <div className='px-4 sm:px-6 md:px-0'>
                  <div className='flex justify-between'>
                    <div className='flex'>
                      <a href='/'>
                        <img
                          src='/images/icon-1.png'
                          className='hidden h-16 lg:block'
                          alt='Celestia block'
                        />
                      </a>
                      <h1 className='my-auto hidden font-[ruberoid] text-xl font-semibold text-gray-900 md:block md:text-2xl lg:ml-2 lg:text-3xl'>
                        {spec && spec.info.title}
                      </h1>
                    </div>
                    <div className='my-auto ml-20 inline-flex flex-row items-center rounded-lg bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800'>
                      <span className='mr-2'>Select API version:</span>
                      <div>
                        <select
                          value={selectedVersion}
                          onChange={handleVersionChange}
                          className='ml-2 h-8 rounded-md border border-gray-300 bg-white py-0 pl-3 pr-7 text-gray-700 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm'
                        >
                          {versions.map((version) => (
                            <option key={version} value={version}>
                              {version}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <h2 className='mt-2 pb-4 pt-4 text-base font-normal text-gray-700'>
                    {spec && `${spec.info.description} `}
                    {spec && (
                      <a
                        href={`https://github.com/celestiaorg/celestia-node/releases/${spec.info.version}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-500 hover:text-blue-700 hover:underline'
                      >
                        {`(${spec.info.version})`}
                      </a>
                    )}
                  </h2>
                </div>
                <div className='px-4 sm:px-6 md:px-0'>
                  <div className='py-4'>
                    {spec &&
                      Object.entries(getMethodsByPackage(spec))
                        .filter(
                          ([pkg, methods]) =>
                            pkg
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            methods.some((method) =>
                              method.name
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase())
                            )
                        )
                        .map(([pkg, methods]) => {
                          const filteredMethods = pkg
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                            ? methods
                            : methods.filter((method) =>
                                method.name
                                  .toLowerCase()
                                  .includes(searchTerm.toLowerCase())
                              );

                          return (
                            <div key={pkg} className='pb-6' id={pkg}>
                              <a
                                key={pkg}
                                href={`/?version=${selectedVersion}#${pkg}`}
                                onMouseEnter={() => setShowHash(pkg)}
                                onMouseLeave={() => setShowHash('')}
                              >
                                <h3
                                  id={pkg}
                                  className='font-[ruberoid] text-2xl font-bold uppercase'
                                >
                                  {pkg}
                                  {showHash === pkg && (
                                    <CopyToClipboard
                                      text={`${window.location.origin}/?version=${selectedVersion}#${pkg}`}
                                    >
                                      <span className='ml-2 cursor-pointer text-gray-500 hover:text-blue-500'>
                                        #
                                      </span>
                                    </CopyToClipboard>
                                  )}
                                </h3>
                              </a>
                              {filteredMethods.map((method) => (
                                <div
                                  key={`${pkg}.${method.name}`}
                                  id={`${pkg}.${method.name}`}
                                >
                                  <RPCMethod
                                    pkg={pkg}
                                    method={method}
                                    activateSidebar={activateSidebar}
                                    selectedVersion={selectedVersion}
                                  />
                                  <button
                                    type='button'
                                    className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm'
                                    onClick={() => {
                                      pkg &&
                                        setCurrentRequest(
                                          getExampleRequest(pkg, method)
                                        );
                                      setPlaygroundOpen(true);
                                    }}
                                  >
                                    Try it out
                                  </button>
                                </div>
                              ))}
                            </div>
                          );
                        })}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      {/* EXAMPLE TYPE MODAL */}
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
                <Dialog.Panel className='relative transform rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
                  <div className='absolute right-0 top-0 hidden pr-4 pt-4 sm:block'>
                    <button
                      type='button'
                      className='rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
                      onClick={() => setOpen(false)}
                    >
                      <span className='sr-only'>Close</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>
                  <div className='overflow-x-auto sm:flex sm:items-start'>
                    <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
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
                      className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm'
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
      {/* PLAYGROUND MODAL */}
      <Transition show={playgroundOpen}>
        <Dialog className='relative z-10' onClose={setPlaygroundOpen}>
          <TransitionChild
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </TransitionChild>

          <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
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
                      {/* <p className='text-sm text-gray-500'>
                          Are you sure you want to deactivate your account? All
                          of your data will be permanently removed from our
                          servers forever. This action cannot be undone.
                        </p> */}
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
                        {currentTab == 0 && (
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
                        )}
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
                            value={JSON.stringify(currentResponse, null, 2)}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
                    <button
                      type='button'
                      className='mt-3 inline-flex w-full justify-center rounded-md bg-purple-100 px-3 py-2 text-sm font-semibold text-purple-900 shadow-sm ring-1 ring-inset ring-purple-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
                      onClick={async () => {
                        const data = await sendRequest(currentRequest);
                        setCurrentResponse(data);
                        setCurrentTab(1);
                        setNotification({
                          active: true,
                          success: true,
                          message: 'Request sent successfully',
                        });
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
      {/* NOTIFICATIONS NOT WORKING YET*/}
      {/* <div
        aria-live='assertive'
        className='pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6'
      >
        <div className='flex w-full flex-col items-center space-y-4 sm:items-end'>
          <Transition
            show={notification.active}
            enter='transform ease-out duration-300 transition'
            enterFrom='translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2'
            enterTo='translate-y-0 opacity-100 sm:translate-x-0'
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
              <div className='p-4'>
                <div className='flex items-start'>
                  <div className='flex-shrink-0'>
                    <CheckCircleIcon
                      className='h-6 w-6 text-green-400'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='ml-3 w-0 flex-1 pt-0.5'>
                    <p className='text-sm font-medium text-gray-900'>
                      {notification.success ? 'Success' : 'Failure'}
                    </p>
                    <p className='mt-1 text-sm text-gray-500'>
                      {notification.message}
                    </p>
                  </div>
                  <div className='ml-4 flex flex-shrink-0'>
                    <button
                      type='button'
                      className='inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      onClick={() => {
                        setNotification({ ...notification, active: false });
                      }}
                    >
                      <span className='sr-only'>Close</span>
                      <XMarkIcon className='h-5 w-5' aria-hidden='true' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div> */}
    </>
  );
}

const RPCMethod = ({
  pkg,
  method,
  activateSidebar,
  selectedVersion,
}: {
  pkg: string;
  method: Method;
  activateSidebar: (param: Param) => void;
  selectedVersion: string;
}) => {
  const [showRequest, setShowRequest] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const methodRef = useRef<HTMLDivElement>(null); // create a ref

  const handleCopyClick = () => {
    const hash = window.location.hash.substring(1);
    const element = document.getElementById(hash);
    element?.scrollIntoView();
  };

  return (
    <div
      key={`${pkg}.${method.name}`}
      id={`${pkg}.${method.name}`}
      className='py-2'
      ref={methodRef}
    >
      <div className='flex items-center justify-between'>
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
        <CopyToClipboard
          text={`${window.location.origin}/?version=${selectedVersion}#${pkg}.${method.name}`}
          onCopy={handleCopyClick}
        >
          <span
            className='cursor-pointer text-gray-500 hover:text-blue-500'
            onClick={() => {
              window.location.hash = `${pkg}.${method.name}`;
            }}
          >
            #
          </span>
        </CopyToClipboard>
      </div>
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

const getExampleRequest = (pkg: string, method: Method): string => {
  return JSON.stringify(
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
  );
};

const getExampleResponse = (method: Method): string => {
  return JSON.stringify(
    {
      id: 1,
      jsonrpc: '2.0',
      result:
        method.result.description == 'Null' || !method.result.schema.examples
          ? []
          : [method.result.schema.examples[0]],
    },
    null,
    2
  );
};

const sendRequest = async (request: string): Promise<string> => {
  const { data } = await axios.post(
    'http://localhost:26658',
    JSON.parse(request)
  );
  return data;
};
