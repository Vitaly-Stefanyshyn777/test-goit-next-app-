"use client";
import { useFilter } from "@/store/filter/filter";

export default function SearchBox() {
  const setFilter = useFilter((state) => state.setFilter);

  return (
    <input
      type="text"
      placeholder="Пошук…"
      className="input border px-2 py-1"
      onChange={(e) => setFilter(e.target.value.toLowerCase())}
    />
  );
}
