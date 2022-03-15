import { Link, useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { useState } from "react";

interface SearchProps {
  parentClass: string;
  destination: string;
  placeholder: string;
}

const nameCheckObj: { [key: string]: string } = {
  mimikyu: "mimikyu-disguised",
  basculin: "basculin-red-striped",
  giratina: "giratina-altered",
};

const Search = ({ parentClass, destination, placeholder }: SearchProps) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  return (
    <div className={`${parentClass}__input`}>
      <input
        type="text"
        name="search"
        className="input__input"
        value={input}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate(`/${destination}/${nameCheckObj[input] || input}`);
          }
        }}
        onInput={(e) => {
          const target = e.target as HTMLInputElement;
          setInput(target.value);
        }}
        placeholder={placeholder}
        maxLength={20}
      />
      <Link
        to={
          input!.length === 0
            ? `/`
            : `/${destination}/${nameCheckObj[input] || input}`
        }
      >
        <button className="input__go">
          <GoSearch />
        </button>
      </Link>
    </div>
  );
};

export default Search;
