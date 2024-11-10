import React, { useState } from "react";

function Search({ setSubmittedSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    setSubmittedSearch(value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
