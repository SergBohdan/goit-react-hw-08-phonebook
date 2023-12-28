import { useDispatch} from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';

  export const ContactList = ({ contacts }) => {
    const dispatch = useDispatch();
  
    return (
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  };