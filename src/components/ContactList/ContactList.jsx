import { HiOutlineUser,HiOutlinePhone  } from "react-icons/hi";


export default function ContactList({users}) {
  return <ul>
    {users.map(user=>(<li key={user.id}>
      <div><HiOutlineUser/><p>{user.name}</p></div>
      <div><HiOutlinePhone /><p>{user.number}</p></div>
    </li>))}
  </ul>;
}
