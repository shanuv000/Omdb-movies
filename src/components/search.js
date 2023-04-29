import React from "react";
const Search = ({ setSearchTerm, handleSearch }) => {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="input-group mb-4 px-2 sticky-top">
        <input
          className="form-control  col-11"
          type="text"
          placeholder="Search movies..."
          onChange={handleInputChange}
          aria-label=".form-control-lg example"
        />
        <button
          type="button"
          className="btn btn-success col-1 "
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {/* <div className="search mb-3">
        <input type="text" />
      </div> */}
    </>
  );
};
export default Search;
