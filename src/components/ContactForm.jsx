"use client";
import { useAddContact } from "@/lib/useMutation";

export default function ContactForm() {
  const { mutate: addContact } = useAddContact();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    addContact(
      { name: name.value.trim(), number: number.value.trim() },
      { onSuccess: () => e.target.reset() }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input name="name" placeholder="Name" required />
      <input name="number" placeholder="Number" required />
      <button type="submit">Add</button>
    </form>
  );
}
