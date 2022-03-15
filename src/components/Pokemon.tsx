import Layout from "./Layout";
import Info from "./pokemon/Info";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface PokemonObj {
  name: string;
  id: number;
  weight: number;
  height: number;
  types: { type: { name: string }; slot: number }[];
  stats: { base_stat: number; stat: { name: string } }[];
  abilities: { ability: { name: string }; is_hidden: boolean }[];
}

const nameCheck = (name: string | number) => {
  if (typeof name === "number") return name;
  return name.split("-")[0];
};

const getData = async (API_URL: string, CACHE_NAME: string) => {
  return await caches.open(CACHE_NAME).then((cache) => {
    return cache
      .match(API_URL)
      .then((res) => res?.json())
      .then((data) => {
        // Check if data exists
        if (!data) {
          // Fetch data and add it to cache
          return (
            cache
              .add(API_URL)
              .then(() => {
                return cache
                  .match(API_URL)
                  .then((res) => res?.json())
                  .then((data) => data);
              })
              // Return false to indicate an error occured
              .catch(() => false)
          );
        } else {
          return data;
        }
      });
  });
};

const Pokemon = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pokeData, editPokeData] = useState<PokemonObj>();
  const [desc, setDesc] = useState("");
  const [pokeAbilities, setPokeAbilities] = useState<string[]>([]);
  const [sprites, setSprites] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getData(`https://pokeapi.co/api/v2/pokemon/${id}`, "pokedata").then(
      (data) => {
        editPokeData(data);

        if (data) {
          setSprites(data.sprites.other["official-artwork"].front_default);
          getData(
            `https://pokeapi.co/api/v2/pokemon-species/${nameCheck(id!)}`,
            "pokespecies"
          ).then((data) => {
            const entry = data.flavor_text_entries.filter(
              (entry: { language: { name: string } }) =>
                entry.language.name === "en"
            );

            setDesc(entry.shift().flavor_text);
          });

          for (const ability of data.abilities) {
            getData(ability.ability.url, "pokeabilities").then((data) => {
              setPokeAbilities((oldArray: any) => [
                ...oldArray,
                data.effect_entries.filter(
                  (entry: { language: { name: string } }) =>
                    entry.language.name === "en"
                )[0].short_effect,
              ]);
            });
          }
        } else if (
          window.location.href.includes("http://localhost:3000/pokemon/")
        ) {
          navigate("/error", {
            state: {
              name: id,
            },
          });
        }
      }
    );
  }, [id, navigate]);

  useEffect(() => {
    if (desc && pokeData && pokeAbilities) setLoading(false);
  }, [desc, pokeData, pokeAbilities]);

  return (
    <Layout>
      {isLoading ? (
        <div className="main__loading loading">
          <div className="loading__spinner"></div>
        </div>
      ) : (
        <Info
          sprites={sprites}
          name={pokeData!.name}
          pID={pokeData!.id}
          weight={pokeData!.weight}
          height={pokeData!.height}
          types={pokeData!.types}
          stats={pokeData!.stats}
          desc={desc}
          abilities={pokeData!.abilities}
          abilityEntries={pokeAbilities}
        />
      )}
    </Layout>
  );
};

export default Pokemon;
