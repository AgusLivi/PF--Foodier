import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import CardContainer from "../CardContainer/CardContainer";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
  
    const handleOnChange = (event) => {
      setSearch(event.target.value);
    };
  
    const handleOnClick = () => {
      // Aquí puedes realizar alguna acción con el valor de búsqueda
      // dispatch(actionDispatched(search));
      setSearch("");
    };
  
    return (
      <div className={styles["search-box"]}>
        <input
          type="search"
          value={search}
          onChange={handleOnChange}
          className={styles["input-search"]}
          placeholder="Type to Search..."
        />
  
        <button className={styles["btn-search"]} onClick={handleOnClick}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
  
        <CardContainer />
      </div>
    );
  };
  
  export default SearchBar;