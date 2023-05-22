import {AppRoute} from 'const';
import {Link} from 'react-router-dom';

type PropsType = {
  setIsConfirmModalOpened: (arg: boolean) => void
};

export default function ConfirmModal({setIsConfirmModalOpened}: PropsType) {
  return (
    <div>
      <span>Регистрация прошла успешно!</span>
      <Link to={AppRoute.Login} onClick={() => setIsConfirmModalOpened(false)}>
        Перейти к форме Логин
      </Link>
    </div>
  );
}
