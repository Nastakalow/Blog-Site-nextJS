import Link from "next/link";

import style from "./sytles.module.css";

function Header() {
  return (
    <header className={style.header}>
      <Link className={style.logo} href={"/"}>
        <span>BLOG</span>
      </Link>
      <nav>
        <Link href={"https://github.com/nastakalow"} target="_blank">
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
