import Layout from "./Layout";
import { CgPokemon } from "react-icons/cg";

const E404 = () => {
  return (
    <Layout footer={true}>
      <div className="main__error">
        <p className="error__code">
          <strong>Error: 404</strong>
        </p>
        <CgPokemon className="error__robot" />
        <p className="error__text">We can't seem to find that page</p>
      </div>
    </Layout>
  );
};

export default E404;
