import {Link, useLocation} from 'react-router-dom';
import Header from '../../components/header/header';
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
      <main className='grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
        <section className='text-center'>
          <p className='text-xl font-semibold text-indigo-600'>404</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>Page not found</h1>
          <p className='mt-6 mb-6 text-base leading-7 text-gray-600'>
            Sorry, we couldn`t find the page you`re looking for.
          </p>
          <Link
            className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            to={AppRoute.Main}
          >
            Вернуться на главную
          </Link>
        </section>
      </main>
    </>
  );
}
