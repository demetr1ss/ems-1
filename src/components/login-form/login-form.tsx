import {AppRoute, emailRegExp} from 'const';
import {useForm} from 'react-hook-form';
import users from '../../data/users.json';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from 'hooks';
import {logIn} from 'store/user-process/user-process';

export default function LoginForm() {
  const [isFormValid, setIsFormValid] = useState(true);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  type FormDataType = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormDataType>({
    mode: 'all',
  });

  const onSubmit = (data: FormDataType) => {
    const currentUser = users.filter(
      (user) => user.password === data.password && user.email === data.email
    )[0];
    setIsFormValid(!!currentUser);

    if (currentUser) {
      dispatch(logIn(currentUser.username));
      navigate(AppRoute.Profile);
    }

    return;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!isFormValid && <span>Имя пользователя или пароль введены не верно</span>}
      <label>
        <span>Логин (email)</span>
        <input
          type='email'
          autoComplete='new-password'
          {...register('email', {
            required: true,
            pattern: emailRegExp,
          })}
        />
      </label>
      <label>
        <span>Пароль</span>
        <input
          type='password'
          autoComplete='new-password'
          {...register('password', {
            required: true,
          })}
        />
      </label>
      <button type='submit' disabled={!!errors.email || !!errors.password}>
        Войти
      </button>
    </form>
  );
}
