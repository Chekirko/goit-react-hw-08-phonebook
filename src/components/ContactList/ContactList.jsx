import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter, getIsLoggedIn } from 'redux/selectors';
import ContactItem from 'components/ContactItem/ContactItem';
import { fetchContacts } from 'redux/operations';
import { Contacts, ContactsListMessage } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoggedIn = useSelector(getIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <>
      {isLoggedIn && (
        <Contacts>
          {visibleContacts.map(({ id, name, number }) => {
            return <ContactItem key={id} id={id} name={name} number={number} />;
          })}
        </Contacts>
      )}
      {contacts.items.length === 0 && (
        <ContactsListMessage>There`s no contacts yet</ContactsListMessage>
      )}
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
