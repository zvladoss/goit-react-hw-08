import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/filters/selectors';

import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.ul}>
      {contacts.map(contact => (
        <li className={css.name} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
