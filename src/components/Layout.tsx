import Logo from "../assets/milotic-logo.png";
import Footer from "./layout_defaults/Footer";
import Header from "./layout_defaults/Header";

interface LayoutProps {
  children: JSX.Element | void;
  footer?: boolean;
}

// The basic layout to use across the site
const Layout = ({ children, footer }: LayoutProps) => {
  return (
    <div className="wrapper">
      <Header title="Milotic" logo={Logo} nav={true} />
      <main className="wrapper__main">{children ? children : false}</main>
      {footer ? <Footer name="Milotic" /> : false}
    </div>
  );
};

export default Layout;
