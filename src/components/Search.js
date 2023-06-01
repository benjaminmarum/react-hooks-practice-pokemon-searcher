import React from "react";

function Search({setSearch}) {

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleSearchChange} className="prompt" placeholder="Search Pokemon" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
