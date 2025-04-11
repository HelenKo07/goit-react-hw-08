import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilters, setNameFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();

  const filter = useSelector(selectNameFilters) || "";

  const handleFilterSearch = (event) =>
    dispatch(setNameFilter(event.target.value));

  const handleClearSearch = () => dispatch(setNameFilter(""));

  return (
    <div>
      <p className={css.searchBox}>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        name="name"
        autoComplete="on"
        value={filter}
        onChange={handleFilterSearch}
      />
      <button className={css.btnClear} onClick={handleClearSearch}>
        Clear Search
      </button>
    </div>
  );
}
