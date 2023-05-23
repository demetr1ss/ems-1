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
    const logins = users.map((user) => user.username);
    const emails = users.map((user) => user.email);

    if (logins.includes(data.username)) {
      showNotify({type: 'error', message: 'Пользователь с таким логином уже зарегистрирован'});
      return;
    }

    if (emails.includes(data.email)) {
      showNotify({type: 'error', message: 'Пользователь с таким e-mail уже зарегистрирован'});
      return;
    }

    data && setIsConfirmModalOpened(true);
  };

  return (
    <form className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6' onSubmit={handleSubmit(onSubmit)}>
      <label className='block text-sm font-medium leading-6 text-gray-900'>
        <span>Имя</span>
        <input
          type='text'
          autoComplete='new-password'
          className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2'
          {...register('username', {
            required: true,
          })}
        />
      </label>
      <label className='block text-sm font-medium leading-6 text-gray-900'>
        <span>Логин (email)</span>
        <input
          type='email'
          autoComplete='new-password'
          className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2'
          {...register('email', {
            required: true,
            pattern: emailRegExp,
          })}
        />
        {errors?.email && <span className='text-red-400 text-xs'>invalid email.</span>}
      </label>
      <label className='block text-sm font-medium leading-6 text-gray-900'>
        <span>Пароль</span>
        <input
          type='password'
          autoComplete='new-password'
          className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2'
          {...register('password', {
            required: true,
          })}
        />
        {errors?.password && <span className='text-red-400 text-xs'>invalid password.</span>}
      </label>
      <label className='block text-sm font-medium leading-6 text-gray-900'>
        <span>Повторите пароль</span>
        <input
          type='password'
          autoComplete='new-password'
          className='block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2'
          {...register('confirmPassword', {
            required: true,
            validate: (value: string) => {
              if (watch('password') !== value) {
                return 'Введенные пароли не совпадают';
              }
            },
          })}
        />
        {errors?.confirmPassword && (
          <span className='text-red-400 text-xs'>{errors.confirmPassword.message}</span>
        )}
      </label>
      <button
        className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:pointer-events-none'
        type='submit'
      >
        Зарегистрироваться
      </button>
    </form>
  );
}
