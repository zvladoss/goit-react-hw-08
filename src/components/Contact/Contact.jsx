import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { ImUser } from 'react-icons/im';
import { ImPhone } from 'react-icons/im';
import { FaPenSquare } from 'react-icons/fa';
import { deleteContact, updateContact } from '../../redux/contacts/operations';

import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleUpdate = () => {
    dispatch(
      updateContact({ contactId: contact.id, updatedData: { name, number } })
    );
    setIsEditing(false);
  };

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.item}>
      <div className={css.wrap}>
        <p>
          <ImUser className={css.icon} />
          {contact.name}
        </p>
        <p>
          <ImPhone className={css.icon} />
          {contact.number}
        </p>
      </div>
      <FaPenSquare className={css.pen} onClick={() => setIsEditing(true)} />
      {isEditing && (
        <div className={css.modal}>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="text"
            value={number}
            onChange={e => setNumber(e.target.value)}
            placeholder="Number"
          />
          <button className={css.btn} onClick={handleUpdate}>
            Save
          </button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      )}

      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
