import { useSelector } from 'react-redux';
import { getContactsValue } from 'redux/selectors';
import { getFilterValue } from 'redux/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { NotFound } from 'components/NotFound/NotFound';
import { ContactListWrapper } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContactsValue);
  const filter = useSelector(getFilterValue);

  const contactFilter = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const getAvailableContacts = filter ? contactFilter() : contacts;

  return (
    <>
      {getAvailableContacts.length > 0 ? (
        <ContactListWrapper>
          {getAvailableContacts.map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))}
        </ContactListWrapper>
      ) : (
        <NotFound />
      )}
    </>
  );
};
