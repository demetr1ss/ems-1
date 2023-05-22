import {AppRoute} from 'const';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Link to={AppRoute.Main}>На главную</Link>
      <Link to={AppRoute.Profile}>Профиль </Link>
      <Link to={AppRoute.Login}>Логин</Link>
      <Link to={AppRoute.Registration}>Регистрация</Link>
    </>
  );
}
