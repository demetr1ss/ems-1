import Header from 'components/header/header';
import RegistrationForm from 'components/registration-form/registration-form';
import FocusLock from 'react-focus-lock';
import ConfirmModal from 'components/confirm-modal/confirm-modal';
import {useEffect, useState} from 'react';
import {RemoveScroll} from 'react-remove-scroll';
import {useNavigate} from 'react-router-dom';
import {AuthorizationStatus, AppRoute} from 'const';
import {useAppSelector} from 'hooks';
import {getAuthorizationStatus} from 'store/user-process/selectors';

export default function RegistrationScreen() {
  const [isConfirmModalOpened, setIsConfirmModalOpened] = useState(false);
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Profile);
    }
  }, [authStatus, navigate]);

  return (
    <>
      <Header />
      <main>
        <RegistrationForm setIsConfirmModalOpened={setIsConfirmModalOpened} />
        {isConfirmModalOpened && (
          <FocusLock>
            <RemoveScroll enabled={isConfirmModalOpened}>
              <ConfirmModal setIsConfirmModalOpened={setIsConfirmModalOpened} />
            </RemoveScroll>
          </FocusLock>
        )}
      </main>
    </>
  );
}
