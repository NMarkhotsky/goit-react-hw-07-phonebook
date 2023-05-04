import { useSelector } from 'react-redux';
import { ListItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { getContacts, getFilters } from 'redux/selector';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);

  const getVisibleContact = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <List>
      <ListItem contacts={getVisibleContact()} />
    </List>
  );
};
