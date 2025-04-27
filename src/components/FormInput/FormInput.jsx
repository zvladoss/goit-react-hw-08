import { ErrorMessage, Field } from "formik";
const FormInput = ({ label, name, s, type = "text" }) => {
  return (
    <label>
      <span>{label}</span>
      <Field name={name} type={type}></Field>
      <ErrorMessage
        name={name}
        component="p"
        className={s.error}
      ></ErrorMessage>
    </label>
  );
};

export default FormInput;
