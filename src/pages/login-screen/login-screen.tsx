import Header from 'components/header/header';
import LoginForm from 'components/login-form/login-form';

export default function LoginScreen() {
  return (
    <>
      <Header />
      <main className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
        <LoginForm />
      </main>
    </>
  );
}
