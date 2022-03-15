interface StatProps {
  name: string;
  value: number;
}

const formatter = (name: string) => {
  const formatName = name;
  if (formatName === "hp") return formatName.toUpperCase();
  if (formatName.includes("-")) {
    return formatName.includes("attack") ? "s.Atk" : "s.Def";
  }
  return formatName;
};

const Stat = ({ name, value }: StatProps) => {
  return (
    <div className="wrapper__stat">
      <div className="stat__text">
        <p className="text__name">{formatter(name)}</p>
        <p className="text__value">({value})</p>
      </div>
      <div
        className="stat__graph"
        style={{
          background: `linear-gradient(to right, #3b4cca ${
            value / 2.55
          }%, transparent 1px)`,
        }}
      ></div>
    </div>
  );
};

export default Stat;
