import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import FormInput from "../FormInput/FormInput";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const phoneRegex = /(?:\+|\d)[\d\-\(\) ]{9,}\d/g;
const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
  number: Yup.string()
    .matches(phoneRegex, "Invalid phone number!")
    .min(13, "Too short!")
    .required("Required!"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));
    actions.setSubmitting(false);
    actions.resetForm();
  };

  const initialValues = {
    name: "",
    number: "",
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        <Form>
          <FormInput name="name" s={s} label="Name" />
          <FormInput name="number" s={s} label="Number" />
          <button className={s.formBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
