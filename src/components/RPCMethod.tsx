import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRef } from 'react';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { getExampleRequest } from '@/lib/helper';
import { Method, Param } from '@/lib/types';

import CopyIcon from '@/components/buttons/CopyIcon';

const RPCMethod = ({
  pkg,
  method,
  activateSidebar,
  selectedVersion,
  setCurrentRequest,
  setPlaygroundOpen,
}: {
  pkg: string;
  method: Method;
  activateSidebar: (param: Param) => void;
  selectedVersion: string;
  setCurrentRequest: (req: string) => void;
  setPlaygroundOpen: (open: boolean) => void;
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
          <div
            className='cursor-pointer'
            onClick={() => {
              window.location.hash = `${pkg}.${method.name}`;
            }}
          >
            <CopyIcon />
          </div>
        </CopyToClipboard>
      </div>
      <p className='text-sm font-light text-gray-700'>{method.description}</p>
      <button
        type='button'
        className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 md:block'
        onClick={() => {
          pkg && setCurrentRequest(getExampleRequest(pkg, method));
          setPlaygroundOpen(true);
        }}
      >
        Try it out
      </button>
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
                      : method.result.schema.examples[0],
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
export default RPCMethod;
