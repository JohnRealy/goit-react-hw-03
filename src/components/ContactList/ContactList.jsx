import { HiOutlineUser,HiOutlinePhone  } from "react-icons/hi";
import css from './ContactList.module.css';


export default function ContactList({users}) {
  return <ul className={css.list}>
    {users.map(user=>(<li key={user.id} className={css.listItem}>
      <div><HiOutlineUser/><p>{user.name}</p></div>
      <div><HiOutlinePhone /><p>{user.number}</p></div>
    </li>))}
  </ul>;
}
