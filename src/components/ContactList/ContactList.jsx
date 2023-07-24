import { ContactItem } from 'components/ContactItem';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const filtredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Contacts</h2>
      <List>
        {filtredContacts.map(({ name, number, id }) => {
          return (
            <ContactItem
              key={id}
              name={name}
              number={number}
              onDelete={() => dispatch(deleteContact(id))}
            />
          );
        })}
      </List>
    </>
  );
};
