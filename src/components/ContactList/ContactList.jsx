import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ users, searchQuery, setUsers }) {
  const handleRemove = (id) => {
    if (searchQuery) {
      return;
    }
    const newList = users.filter((user) => user.id !== id);

    setUsers(newList);
    console.log("Tis is:", id);
  };

  const trimedQuery = searchQuery.toLowerCase().trim();

  if (!searchQuery) {
    return (
      <ul className={css.list}>
        {users.map((user) => (
          <li key={user.id} className={css.listItem}>
            <Contact user={user} handleRemove={handleRemove} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={css.list}>
      {users
        .filter((user) => user.name.toLowerCase().trim().includes(trimedQuery))
        .map((user) => (
          <li key={user.id} className={css.listItem}>
            <Contact user={user} handleRemove={handleRemove} />
          </li>
        ))}
    </ul>
  );
}
