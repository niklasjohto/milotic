import "../../css/pokemon.scss";

import Type from "./Type";
import Stat from "./Stat";
import Ability from "./Ability";

import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { Link } from "react-router-dom";

interface InfoProps {
  sprites: string;
  name: string;
  pID: number;
  weight: number;
  height: number;
  types: { type: { name: string }; slot: number }[];
  stats: { base_stat: number; stat: { name: string } }[];
  desc: string;
  abilities: { ability: { name: string }; is_hidden: boolean }[];
  abilityEntries: string[];
}

const Info = ({
  sprites,
  name,
  pID,
  weight,
  height,
  types,
  stats,
  desc,
  abilities,
  abilityEntries,
}: InfoProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {loaded ? null : (
        <div className="pokemon__loading loading">
          <div className="loading__spinner"></div>
        </div>
      )}
      <div
        className="main__pokemon"
        style={{
          display: loaded ? "flex" : "none",
        }}
      >
        <section className="pokemon__pokemon">
          {pID !== 1 ? (
            <Link
              to={`/pokemon/${pID - 1}`}
              className="pokemon__past"
              onClick={() => setLoaded(false)}
            >
              <button className="past__btn">
                <MdKeyboardArrowLeft />
              </button>
            </Link>
          ) : (
            false
          )}
          <div className="pokemon__card">
            <figure className="card__img">
              <img
                className="img__img"
                src={sprites}
                alt={`${name} art`}
                onLoad={() => setLoaded(true)}
              />
            </figure>
            <section className="card__info">
              <div className="info__title">
                <p className="title__id">#{pID}</p>
                <strong className="title__name">
                  {name === "type-null" ? name : name.split("-")[0]}
                </strong>
              </div>
              <div className="info__body">
                <p className="body__height">
                  <span className="body--bold">HEIGHT</span>: {height / 10}m
                </p>
                <p className="body__weight">
                  <span className="body--bold">WEIGHT</span>: {weight / 10}kg
                </p>
              </div>
              <div className="info__types">
                {types.map((type: { slot: number; type: { name: any } }) => (
                  <Type type={type.type.name} key={type.slot}></Type>
                ))}
              </div>
              <div className="info__desc">
                <p className="desc__text">{desc}</p>
              </div>
            </section>
          </div>
          {pID !== 898 ? (
            <Link
              to={`/pokemon/${pID + 1}`}
              className="pokemon__next"
              onClick={() => setLoaded(false)}
            >
              <button className="next__btn">
                <MdKeyboardArrowRight />
              </button>
            </Link>
          ) : (
            false
          )}
        </section>
        <section className="pokemon__extra">
          <div className="extra__stats">
            <p className="stats__title">BASE STATS</p>
            <div className="stats__wrapper">
              {stats.map((stat, index) => (
                <Stat
                  name={stat.stat.name}
                  value={stat.base_stat}
                  key={index}
                ></Stat>
              ))}
            </div>
          </div>
          <div className="extra__abilities">
            <p className="abilities__title">ABILITIES</p>
            <div className="abilities__wrapper">
              {abilities.map((ability, index) => (
                <Ability
                  name={ability.ability.name}
                  hidden={ability.is_hidden}
                  abilityEntry={abilityEntries[index]}
                  key={index}
                ></Ability>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Info;
