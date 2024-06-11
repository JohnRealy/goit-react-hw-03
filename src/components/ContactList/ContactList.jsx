import { HiOutlineUser, HiOutlinePhone } from "react-icons/hi";
import css from "./ContactList.module.css";

export default function ContactList({ users, searchQuery, setUsers }) {
  const handleRemove = (id) => {
    const newList = users.filter((user) => user.id !== id);

    setUsers(newList);
    console.log("Tis is:", id);
  };

  if (!searchQuery) {
    return (
      <ul className={css.list}>
        {users.map((user) => (
          <li key={user.id} className={css.listItem}>
            <div className={css.listInfo}>
              <div className={css.listWrap}>
                <HiOutlineUser />
                <p>{user.name}</p>
              </div>
              <div className={css.listWrap}>
                <HiOutlinePhone />
                <p>{user.number}</p>
              </div>
            </div>
            <button
              type="button"
              className={css.btn}
              onClick={() => handleRemove(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={css.list}>
      {users
        .filter((user) => user.name.includes(searchQuery))
        .map((user) => (
          <li key={user.id} className={css.listItem}>
            <div className={css.listInfo}>
              <div className={css.listWrap}>
                <HiOutlineUser />
                <p>{user.name}</p>
              </div>
              <div className={css.listWrap}>
                <HiOutlinePhone />
                <p>{user.number}</p>
              </div>
            </div>
            <button
              type="button"
              className={css.btn}
              onClick={handleRemove(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}
