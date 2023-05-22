import Header from 'components/header/header';
import RegistrationForm from 'components/registration-form/registration-form';
import FocusLock from 'react-focus-lock';
import ConfirmModal from 'components/confirm-modal/confirm-modal';
import {useState} from 'react';
import {RemoveScroll} from 'react-remove-scroll';

export default function RegistrationScreen() {
  const [isConfirmModalOpened, setIsConfirmModalOpened] = useState(false);

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
