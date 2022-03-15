import Search from "./Search";
import Layout from "./Layout";
import { BsQuestionDiamondFill } from "react-icons/bs";

import { useLocation } from "react-router-dom";

const Error = () => {
  const { state } = useLocation();

  return (
    <Layout>
      <div className="main__noresult">
        <BsQuestionDiamondFill className="noresult__question" />
        <p className="noresult__text">
          We couldn't find "{state.name}", try again?
        </p>

        <div className="noresult__search search">
          <Search
            parentClass="search"
            destination="pokemon"
            placeholder="ID/Name"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Error;
