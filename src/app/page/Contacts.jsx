import { fetchContact } from "@/lib/api";
import React from "react";

async function Contacts() {
  const contacts = await fetchContact();
  console.log(contacts);
  return <div>Contacts</div>;
}

export default Contacts;
