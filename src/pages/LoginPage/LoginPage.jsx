import { LoginForm } from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <>
      <title className={css.title}>Login</title>
      <LoginForm />
    </>
  );
}
