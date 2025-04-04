import { useEffect, useState } from "react";
import "./App.css";
import initialContact from "./assets/contacts.json";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SeacrhBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts && savedContacts !== "[]"
      ? JSON.parse(savedContacts)
      : initialContact;
  });
  const [search, setSearch] = useState("");

  const savedContacts = localStorage.getItem("contacts");
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deletePhone = (phoneId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== phoneId);
    });
  };

  const searchContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList onDelete={deletePhone} contacts={searchContacts} />
    </div>
  );
}

export default App;
