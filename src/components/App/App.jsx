import { Phonebook } from './App.styled';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

export const App = () => (
  <Phonebook>
    <h1>Phonebook</h1>
    <ContactForm />
    <Filter />
    <ContactList />
  </Phonebook>
);
