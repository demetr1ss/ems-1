import {AppRoute} from 'const';
import {useAppDispatch} from 'hooks';
import {Link} from 'react-router-dom';
import {logOut} from 'store/user-process/user-process';

type PropsType = {
  userName?: string;
};

export default function Header({userName}: PropsType) {
  const dispatch = useAppDispatch();

  return (
    <>
      <Link to={AppRoute.Main}>На главную</Link>
      <Link to={AppRoute.Profile}>Профиль</Link>
      <Link to={AppRoute.Login}>Логин</Link>
      <Link to={AppRoute.Registration}>Регистрация</Link>
      {userName && (
        <div>
          <span>{userName}</span>
          <button onClick={() => dispatch(logOut())}>Выйти</button>
        </div>
      )}
    </>
  );
}
