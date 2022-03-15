import { NavLink } from "react-router-dom";

interface LinkProps {
  path: string;
  text: string;
}

const Link = ({ path, text }: LinkProps) => {
  return (
    <NavLink
      to={path}
      className={(link) => `ul__link${link.isActive ? " selected" : ""}`}
    >
      <li>{text}</li>
    </NavLink>
  );
};

export default Link;
