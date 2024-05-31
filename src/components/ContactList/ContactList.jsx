import { HiOutlineUser,HiOutlinePhone  } from "react-icons/hi";
import css from './ContactList.module.css';


export default function ContactList({users, searchQuery}) {
  if (!searchQuery){
    return <ul className={css.list}>
    {users.map(user=>(<li key={user.id} className={css.listItem}>
      <div className={css.listInfo}>
       <div className={css.listWrap}><HiOutlineUser/><p>{user.name}</p></div>
       <div className={css.listWrap}><HiOutlinePhone /><p>{user.number}</p></div>
      </div>
      <button type='button' className={css.btn}>Delete</button>
    </li>))}
  </ul>;
  }
  
}
