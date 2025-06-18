// src/api/hooks/useContacts.js

import { useQuery } from "@tanstack/react-query";
import { fetchContact } from "./api/api";

export const useFetchContacts = () => {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: fetchContact,
  });
};
