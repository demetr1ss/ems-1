import {emailRegExp} from 'const';
import {useForm} from 'react-hook-form';
import users from '../../data/users.json';
import {showNotify} from 'utils';

type PropsType = {
  setIsConfirmModalOpened: (arg: boolean) => void;
};

export default function RegistrationForm({setIsConfirmModalOpened}: PropsType) {
  type FormDataType = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  const {
    register,
    watch,
    handleSubmit,
    formState: {errors},
  } = useForm<FormDataType>({
    mode: 'all',
  });

  const onSubmit = (data: FormDataType) => {
    const emails = users.map((user) => user.email);

    if (emails.includes(data.email)) {
      showNotify({type: 'error', message: 'Пользователь с таким логином уже зарегистрирован'});
      return;
    }

    data && setIsConfirmModalOpened(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>Имя</span>
        <input
          type='text'
          autoComplete='new-password'
          {...register('username', {
            required: true,
          })}
        />
      </label>
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
        {errors?.email && <span>invalid email</span>}
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
        {errors?.password && <span>invalid password. </span>}
      </label>
      <label>
        <span>Повторите пароль</span>
        <input
          type='password'
          autoComplete='new-password'
          {...register('confirmPassword', {
            required: true,
            validate: (value: string) => {
              if (watch('password') !== value) {
                return 'Введенные пароли не совпадают';
              }
            },
          })}
        />
        {errors?.confirmPassword && <span>{errors.confirmPassword.message}</span>}
      </label>
      <button type='submit'>Зарегистрироваться</button>
    </form>
  );
}
