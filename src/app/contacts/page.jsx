"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchContact } from "@/lib/api/api";
import ContactForm from "@/components/ContactForm";
import SearchBox from "@/components/SearchBox";
import ContactList from "@/components/ContactList";
import { withPrivate } from "@/lib/route-guards";
function ContactsPage() {
  const { data = [] } = useQuery({
    queryKey: ["contacts"],
    queryFn: fetchContact,
  });
  console.log(data);
  return (
    <section className="space-y-4">
      <ContactForm />
      <SearchBox />
      {data.length > 0 && <ContactList contacts={data} />}
    </section>
  );
}

export default withPrivate(ContactsPage);
