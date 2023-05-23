import {AppRoute} from 'const';
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
    login: string;
    password: string;
  };

  const {register, handleSubmit} = useForm<FormDataType>();

  const onSubmit = (formData: FormDataType) => {
    const currentUser = users.filter(
      ({password, username}) => password === formData.password && username === formData.login
    )[0];

    setIsFormValid(!!currentUser);

    if (currentUser) {
      dispatch(logIn(currentUser.username));
      navigate(AppRoute.Profile);
    }

    return;
  };

  return (
    <form className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6' onSubmit={handleSubmit(onSubmit)}>
      {!isFormValid && (
        <span className='text-red-400 text-xs'>Имя пользователя или пароль введены не верно</span>
      )}
      <label className='block text-sm font-medium leading-6 text-gray-900'>
        <span>Логин</span>
        <input
          type='text'
          autoComplete='new-password'
          className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2'
          {...register('login', {
            required: true,
          })}
        />
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
      </label>
      <button
        className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:pointer-events-none'
        type='submit'
      >
        Войти
      </button>
    </form>
  );
}
