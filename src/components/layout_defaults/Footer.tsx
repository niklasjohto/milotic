import { AiFillGithub } from "react-icons/ai";

interface FooterProps {
  name: string;
}

const Footer = ({ name }: FooterProps) => {
  const year = new Date().getFullYear();
  return (
    <footer className="wrapper__footer">
      <p className="footer__info">
        <span
          className="info__github"
          onClick={() => window.open("https://github.com/niftey", "_blank")}
        >
          <AiFillGithub />
        </span>{" "}
        <strong>
          {name} {year}
        </strong>
      </p>
    </footer>
  );
};

export default Footer;
