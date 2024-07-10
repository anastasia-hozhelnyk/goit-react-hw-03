import { nanoid } from "nanoid";
import style from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  const id = nanoid();

  return (
    <div className={style.wrap}>
      <label htmlFor={`filter-${id}`}>Find contact by name</label>
      <input
        className={style.field}
        type="input"
        name="filter"
        id={`filter-${id}`}
        autoComplete="on"
        value={value}
        onChange={(e) => {
          onFilter(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
