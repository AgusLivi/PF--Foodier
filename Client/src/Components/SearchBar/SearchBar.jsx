import { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBar = () => {
    const [search, setSearch] = useState('');
    //const dispatch = useDispatch();

    const handleOnChange = (event) => {
        setSearch(event.target.value)
    };

    const handleOnClick = () => {
        //dispatch(actionDispatched(search))
        setSearch('')
    };
    return (
        <div>
            <input
                type="search"
                value={search}
                onChange={handleOnChange}
            />

            <button onClick={handleOnClick}>SEARCH</button>

        </div>
    )
};

export default SearchBar;