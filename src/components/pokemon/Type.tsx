const TYPESCOLOR = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dark: "#705848",
  dragon: "#7038F8",
  steel: "#B8B8D0",
  fairy: "#F0B6BC",
};

interface TypeProps {
  type: keyof typeof TYPESCOLOR;
}

const Type = ({ type }: TypeProps) => {
  const bgrClr = TYPESCOLOR[type];
  return (
    <div className="types__type" style={{ background: `${bgrClr}` }}>
      {type}
    </div>
  );
};

export default Type;
