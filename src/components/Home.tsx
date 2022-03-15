import Layout from "./Layout";
import Search from "./Search";

const Home = () => {
  return (
    <Layout footer={true}>
      <div className="main__home">
        <div className="home__welcome">
          <p className="welcome__text">
            Welcome to <strong>Milotic</strong>
          </p>
          <p className="welcome__credit">
            This site uses{" "}
            <span
              className="credit__link"
              onClick={() => window.open("https://pokeapi.co/", "_blank")}
            >
              PokéAPI
            </span>{" "}
            to get it's data
          </p>
        </div>
        <div className="home__search search">
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

export default Home;
