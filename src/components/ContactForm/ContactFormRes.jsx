import { useFormik } from "formik";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
const ContactForm = ({ addContact }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    onSubmit: (values, { resetForm }) => {
      const newContact = {
        id: nanoid(),
        name: values.name,
        number: values.number,
      };

      addContact(newContact);
      resetForm();
    },
  });
  return (
    <form className={s.form} onSubmit={formik.handleSubmit}>
      <div>
        <label className={s.formLabel} htmlFor="name">
          Name
        </label>
        <input
          className={s.formInput}
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>
      <div>
        <label className={s.formLabel} htmlFor="number">
          Number
        </label>
        <input
          className={s.formInput}
          id="number"
          name="number"
          type="tel"
          onChange={formik.handleChange}
          value={formik.values.number}
        />
      </div>
      <button className={s.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

// export default ContactForm;
