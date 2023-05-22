import {Link, useLocation} from 'react-router-dom';
import Header from '../../components/header';
import {AppRoute, ToastType} from 'const';
import {showNotify} from 'utils';

export default function NotFoundScreen(): JSX.Element {
  const location = useLocation();
  showNotify({
    type: ToastType.Error,
    message: `Page "${location.pathname.slice(1)}" not found`,
  });

  return (
    <>
      <Header />
      <main>
        <section>
          <h1>404</h1>
          <h2>Page not found</h2>
          <Link to={AppRoute.Main}>
            Вернуться на главную
          </Link>
        </section>
      </main>
    </>
  );
}
