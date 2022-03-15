import { Link } from "react-router-dom";

import { useState } from "react";

interface DexEntryProps {
  name: string;
  id: string;
}

const DexEntry = ({ name, id }: DexEntryProps) => {
  const [loading, setLoading] = useState(true);
  return (
    <Link
      to={`/pokemon/${id}`}
      style={{ display: loading ? "none" : "initial" }}
    >
      <div className="entries__entry">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={`${name} art`}
          className="entry__img"
          onLoad={() => setLoading(false)}
          loading="lazy"
        />
        <p className="entry__id">#{id}</p>
        <p className="entry__name">{name}</p>
      </div>
    </Link>
  );
};

export default DexEntry;
