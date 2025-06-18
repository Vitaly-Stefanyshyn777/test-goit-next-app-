"use client";
import { useFilter } from "@/store/filter/filter";
import Contact from "./Contact";

export default function ContactList({ contacts }) {
  const filter = useFilter((state) => state.filter);

  const visible = contacts.filter(
    (contacts) =>
      contacts.name.toLowerCase().includes(filter) ||
      contacts.number.toLowerCase().includes(filter)
  );

  return (
    <ul className="space-y-2">
      {visible.map((user) => (
        <li key={user.id}>
          <Contact user={user} />
        </li>
      ))}
    </ul>
  );
}
