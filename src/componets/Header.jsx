import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/about"> About </Link>
          </li>
          <li>
            <Link href="/page"> Page </Link>
          </li>
          <li>
            <Link href="/profile"> Profile </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
