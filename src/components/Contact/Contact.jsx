import { deleteContact } from "../../redux/contacts/operations";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.contactWrapper}>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button
        className={s.deleteBtn}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
