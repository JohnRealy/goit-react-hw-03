import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from './App.module.css';
import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ])

  const [maxId,setMaxId] = useState(0);

  const [searchQuery,setSearchQuery] = useState('');

 const idCheck = () => {
    const idArray = users.map(el=>Number(el.id.replace('id-','')))
    setMaxId(Math.max(...idArray)+1)
 }

 useEffect(idCheck,[users])



  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm users={users} setUsers={setUsers} maxId={maxId}/>
      <SearchBox setSearchQuery={setSearchQuery}/>
      <ContactList users={users} searchQuery={searchQuery}/>
    </div>
  );
}
