"use client";
// import { useRefresh } from "@/lib/useRefresh";
import { useRefresh } from "@/lib/useMutation";
import { useAuthStore } from "@/store/auth/auth";
import { useEffect } from "react";

function ClientInit() {
  const { mutate: refresh } = useRefresh();
  const isRefreshing = useAuthStore((state) => state.isRefreshing);

  useEffect(() => {
    refresh();
  }, [refresh]);
  return isRefreshing ? "refreshUser" : null;
}

export default ClientInit;
