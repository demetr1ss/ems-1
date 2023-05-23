import Header from 'components/header/header';
import {useAppSelector} from 'hooks';
import {getUserName} from 'store/user-process/selectors';

export default function ProfileScreen() {
  const userName = useAppSelector(getUserName);

  return (
    <>
      <Header userName={userName} />
      <main className='text-center'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-20'>
          Здравствуйте, {userName}
        </h1>
      </main>
    </>
  );
}
