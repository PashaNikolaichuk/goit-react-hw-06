import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={s.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input type="text" id="search" value={value} onChange={onChange} />
    </div>
  );
};

export default SearchBox;
