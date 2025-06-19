"use client";

import { useAuthStore } from "@/store/auth/auth";
import Link from "next/link";
import React from "react";

function Header() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logout = useAuthStore((state) => state.logout);

  return (
    <header>
      <nav>
        <ul>
          <li>
            {isLoggedIn ? (
              <>
                <Link href="/contacts"> Contacts </Link>
                <button onClick={logout}>Видалити</button>
              </>
            ) : (
              <>
                <Link href="/login"> Login </Link>
                <Link href="/register"> Register </Link>
              </>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
