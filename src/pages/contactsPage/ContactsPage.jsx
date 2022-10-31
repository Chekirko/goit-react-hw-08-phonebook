import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import {
  ContactsPageWrapper,
  ContactsFormWrapper,
  ContactsListWrapper,
  PageTitle,
  ContactsTitle,
  LoaderText,
} from './ContactsPage.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const ContactsPage = () => {
  const { isLoading } = useSelector(getContacts);
  return (
    <ContactsPageWrapper>
      <ContactsFormWrapper>
        <PageTitle>New Contact</PageTitle>
        <ContactForm />
      </ContactsFormWrapper>

      <ContactsListWrapper>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        {isLoading && <LoaderText>Waiting...</LoaderText>}

        <ContactList />
      </ContactsListWrapper>
    </ContactsPageWrapper>
  );
};
