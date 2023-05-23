import Header from 'components/header/header';
import {useAppSelector} from 'hooks';
import {getUserName} from 'store/user-process/selectors';

export default function ProfileScreen() {
  const userName = useAppSelector(getUserName);

  return (
    <>
      <Header userName={userName} />
      <main>Экран приветствия</main>
    </>
  );
}
