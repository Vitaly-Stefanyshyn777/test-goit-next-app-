"use client";
import { useRefresh } from "@/lib/useMutation";
import { useEffect } from "react";

function ClientInit() {
  const { mutate: refresh } = useRefresh();
  useEffect(() => {
    refresh();
  }, [refresh]);
  return null;
}

export default ClientInit;
