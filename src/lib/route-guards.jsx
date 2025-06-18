// src/lib/route-guards.tsx
"use client";

import { useAuthStore } from "@/store/auth/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function withPrivate(Component) {
  return function Guard(props) {
    const { isLoggedIn } = useAuthStore();
    const router = useRouter();

    useEffect(() => {
      if (!isLoggedIn) router.replace("/login");
    }, [isLoggedIn]);

    if (!isLoggedIn) return null; // можна показати Loader
    return <Component {...props} />;
  };
}

export function withPublic(Component) {
  return function Guard(props) {
    const { isLoggedIn } = useAuthStore();
    const router = useRouter();

    useEffect(() => {
      if (isLoggedIn) router.replace("/contacts");
    }, [isLoggedIn]);

    if (isLoggedIn) return null;
    return <Component {...props} />;
  };
}
