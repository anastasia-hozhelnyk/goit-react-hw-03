import { useState, useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import defaultContactsList from "../../contacts.json";
import { nanoid } from "nanoid";
import style from "./App.module.css";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedPhoneBook = localStorage.getItem("phone-book");

    if (savedPhoneBook !== null) {
      return JSON.parse(savedPhoneBook);
    }

    return defaultContactsList;
  });
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    newContact.id = nanoid();
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const filterContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() =>
    localStorage.setItem("phone-book", JSON.stringify(contacts), [contacts])
  );

  return (
    <div className={style.wrap}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList value={filterContact} onDelete={deleteContact} />
    </div>
  );
};

export default App;
