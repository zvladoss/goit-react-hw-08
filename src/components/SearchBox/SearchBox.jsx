import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { useId } from "react";
import { changeFilter, selectNameFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div className={s.searchWrapper}>
      <label htmlFor="search">
        <span>Find contacts by name</span>
        <input
          id={searchId}
          type="text"
          inputMode="search"
          value={value}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default SearchBox;
