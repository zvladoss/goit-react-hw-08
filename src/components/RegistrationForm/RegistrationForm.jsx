import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Мінімум 2 символи').required("Ім'я обов'язкове"),
  email: Yup.string()
    .email('Некоректна email адреса')
    .required('Email обовʼязковий'),
  password: Yup.string()
    .min(7, 'Пароль має містити мінімум 7 символів')
    .required('Пароль обовʼязковий'),
});
export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(register(values));
      console.log('submitted values:', values);
      resetForm();
    } catch (error) {
      console.log('error:', error.message);
    }
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" className={css.error} />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" className={css.error} />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
