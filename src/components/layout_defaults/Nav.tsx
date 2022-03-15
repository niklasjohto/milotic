import Link from "./Link";
// import { BiMenuAltRight } from "react-icons/bi";
// import { IoMdClose } from "react-icons/io";
// import { useState } from "react";

interface NavProps {
  links: { text: string; path: string; id: number }[];
  open: boolean;
}

const Nav = ({ links, open }: NavProps) => {
  return (
    <nav className={`header__nav ${open ? "header__nav--open" : ""}`}>
      <ul className="nav__ul">
        {links.map((item) => {
          return <Link text={item.text} path={item.path} key={item.id} />;
        })}
      </ul>
    </nav>
  );
};

export default Nav;
