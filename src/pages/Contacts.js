
import Filter from 'components/ContactFilter/ContactFilter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';


export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      <Filter />
      <title>Contacts</title>
      {isLoading && !error && (
        <b>
          Loading...
        </b>
      )}
      <ContactList />
    </div>
  );
}