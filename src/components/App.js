import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';

const phoneContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? phoneContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = contacts.find(contact => {
      console.log(contact.name);
      return (
        contact.name.toLowerCase() === name.toLowerCase() &&
        contact.number === number
      );
    });

    if (!contact) {
      setContacts(prevContacts => [
        ...prevContacts,
        createContactObj(name, number),
      ]);
    } else {
      alert(`${name} is already in the contacts`);
    }
  };

  const createContactObj = (name, number) => {
    console.log(name, number);
    const id = nanoid();
    return { id, name, number };
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const onChangeFilterInput = e => {
    setFilter(e.target.value.trim().toLowerCase());
  };

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <section className={css.contacts}>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={onChangeFilterInput} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onBtnClick={deleteContact}
        />
      </section>
    </div>
  );
}

export default App;
