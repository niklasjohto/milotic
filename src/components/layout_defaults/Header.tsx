import Nav from "./Nav";

import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

interface HeaderProps {
  title: string;
  logo?: string;
  nav?: boolean;
}

const links = [{ text: "PokéDex", path: "/pokedex", id: 1 }];

const Header = ({ title, logo, nav }: HeaderProps) => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <header className="wrapper__header">
      <Link to="/" className="header__linkwrap">
        {logo ? (
          <img src={logo} alt={`${title} logo`} className="linkwrap__logo" />
        ) : (
          false
        )}
        <h1 className="linkwrap__title">{title}</h1>
      </Link>
      {nav ? <Nav links={links} open={menuToggle} /> : false}
      <button
        className="header__menu"
        onClick={() => setMenuToggle(!menuToggle)}
      >
        <HiOutlineMenuAlt3 />
      </button>
    </header>
  );
};

export default Header;
