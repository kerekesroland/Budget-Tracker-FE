import "./stlyes.css";
import { CgSearch } from "react-icons/cg";
type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="input__container">
      <CgSearch
        fill="none"
        className="search__icon"
        color={"var(--textColor)"}
      />
      <input className="input__field" type="text" />
    </div>
  );
};

export default SearchBar;
