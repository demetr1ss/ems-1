import {AppRoute} from 'const';
import {Link} from 'react-router-dom';

type PropsType = {
  setIsConfirmModalOpened: (arg: boolean) => void;
};

export default function ConfirmModal({setIsConfirmModalOpened}: PropsType) {
  return (
    <div className='relative z-10'>
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
            <div className='flex flex-col items-center justify-center bg-white px-4 pb-5 pt-5 sm:p-6 sm:pb-4'>
              <h3 className='text-xl font-semibold leading-6 text-gray-900 mb-16'>
                Регистрация прошла успешно!
              </h3>
              <Link
                className='inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto'
                to={AppRoute.Login}
                onClick={() => setIsConfirmModalOpened(false)}
              >
                Перейти к форме Логин
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
