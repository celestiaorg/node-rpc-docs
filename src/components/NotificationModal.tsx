import { Transition } from '@headlessui/react';
import {
  CheckCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import { INotification } from '@/lib/types';
const NotificationModal = ({
  notification,
  setNotification,
}: {
  notification: INotification;
  setNotification: (notification: INotification) => void;
}) => {
  return (
    <div
      aria-live='assertive'
      className='pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6'
    >
      <div className='z-50 flex w-full flex-col items-center space-y-4 sm:items-end'>
        <Transition
          show={notification.active}
          enter='transform ease-out duration-300 transition'
          enterFrom='translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2'
          enterTo='translate-y-0 opacity-100 sm:translate-x-0 z-50'
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='pointer-events-auto z-50 w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
            <div className='z-50 p-4'>
              <div className='z-50 flex items-start'>
                <div className='z-50 flex-shrink-0'>
                  {notification.success ? (
                    <CheckCircleIcon
                      className='h-6 w-6 text-green-400'
                      aria-hidden='true'
                    />
                  ) : (
                    <XCircleIcon
                      className='h-6 w-6 text-red-400'
                      aria-hidden='true'
                    />
                  )}
                </div>
                <div className='ml-3 w-0 flex-1 pt-0.5'>
                  <p className='text-sm font-medium text-gray-900'>
                    {notification.success
                      ? 'Request Succeeded'
                      : 'Request Failed With Error:'}
                  </p>
                  <p className='mt-1 text-sm text-gray-500'>
                    {notification.message}
                  </p>
                </div>
                <div className='z-50 ml-4 flex flex-shrink-0'>
                  <button
                    type='button'
                    className='z-50 inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    onClick={() => {
                      setNotification({ ...notification, active: false });
                    }}
                  >
                    <span className='sr-only'>Close</span>
                    <XMarkIcon className='z-50 h-5 w-5' aria-hidden='true' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
};
export default NotificationModal;
