import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ usersList, searchQuery, removeUser }) {
  const trimedQuery = searchQuery.toLowerCase().trim();

  if (!searchQuery) {
    return (
      <ul className={css.list}>
        {usersList.map((user) => (
          <li key={user.id} className={css.listItem}>
            <Contact user={user} handleRemove={removeUser} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={css.list}>
      {usersList
        .filter((user) => user.name.toLowerCase().trim().includes(trimedQuery))
        .map((user) => (
          <li key={user.id} className={css.listItem}>
            <Contact user={user} handleRemove={removeUser} />
          </li>
        ))}
    </ul>
  );
}
