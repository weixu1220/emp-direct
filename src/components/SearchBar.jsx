import { useState } from "react";
import { useEmployeeContext } from '../EmployeeContext';

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const { dispatch } = useEmployeeContext();

  function handleChange(e) {
    e.preventDefault()
    setSearchInput(e.target.value);
    if (searchInput.length > 0){
      dispatch({ type: "Filter", payload: searchInput })
    }
  }

  return (
    <input value={searchInput} onChange={handleChange} className="search" />
  );
}

export default SearchBar;