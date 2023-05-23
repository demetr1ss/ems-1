import {AppRoute, AuthorizationStatus} from 'const';
import {useAppDispatch, useAppSelector} from 'hooks';
import {Link} from 'react-router-dom';
import {getAuthorizationStatus} from 'store/user-process/selectors';
import {logOut} from 'store/user-process/user-process';

type PropsType = {
  userName?: string;
};

export default function Header({userName}: PropsType) {
  const dispatch = useAppDispatch();
  const userAuthStatus = useAppSelector(getAuthorizationStatus);
  const isUserAuth = userAuthStatus === AuthorizationStatus.Auth;

  return (
    <header className='bg-gray-800'>
      <nav className='mx-auto flex items-center px-7 py-5'>
        <Link
          className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
          to={AppRoute.Main}
        >
          На главную
        </Link>
        <Link
          className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
          to={AppRoute.Profile}
        >
          Профиль
        </Link>
        <Link
          className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
          to={AppRoute.Login}
        >
          Логин
        </Link>
        <Link
          className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
          to={isUserAuth ? AppRoute.Profile : AppRoute.Registration}
        >
          Регистрация
        </Link>
        {userName && (
          <div className='lg:flex lg:flex-1 lg:justify-end'>
            <span className='text-gray-300 rounded-md px-3 py-2 text-sm font-medium'>{userName}</span>
            <button
              className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
              onClick={() => dispatch(logOut())}
            >
              Выйти <span aria-hidden='true'>&rarr;</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
