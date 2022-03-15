import Layout from "./Layout";
import DexEntry from "./pokedex/DexEntry";
import Data from "./pokedex/allEntries";

import "../css/pokedex.scss";

import { useState, useEffect } from "react";

const PokeDex = () => {
  const [entries, setEntries] = useState(Data);
  const [bottom, setBottom] = useState(35);

  const handleScroll = () => {
    const atBottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (atBottom) {
      setBottom((bottom) => bottom + 35);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <div className="main__pokedex">
        <header className="pokedex__header">
          <h1 className="header__title">PokeDéx</h1>
        </header>
        <div className="pokedex__entries">
          {entries!.map((entry, index) => {
            const id = entry.url.split("/")[6];

            if (index >= bottom) return;
            return <DexEntry key={id} id={id!} name={entry.name}></DexEntry>;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default PokeDex;
