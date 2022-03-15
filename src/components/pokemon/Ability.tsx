import { useState } from "react";

import { AiFillEyeInvisible } from "react-icons/ai";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

interface AbilityProps {
  name: string;
  hidden: boolean;
  abilityEntry: string;
}

const Ability = ({ name, hidden, abilityEntry }: AbilityProps) => {
  const [toggleAbility, setToggleAbility] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setToggleAbility(false);
  }, [id]);

  return (
    <div className="wrapper__ability">
      <p
        className={`ability__name ${toggleAbility ? "name--open" : ""}`}
        onClick={() => setToggleAbility(!toggleAbility)}
      >
        {name.replace("-", " ")} {hidden ? <AiFillEyeInvisible /> : ""}
      </p>
      {abilityEntry ? (
        <div
          className="ability__description"
          style={{ display: toggleAbility ? "initial" : "none" }}
        >
          <p className="description__text">{abilityEntry}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Ability;
