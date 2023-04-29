import React from "react";
const Search = ({ setSearchTerm, handleSearch }) => {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="input-group mb-4 px-2 sticky-top ">
        <input
          className="form-control col-sm-2 col-4 "
          type="text"
          placeholder="Search movies..."
          onChange={handleInputChange}
          aria-label=".form-control-lg example"
        />
        <button
          type="button"
          className="btn btn-success col-sm-1 col-3 truncate"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </>
  );
};
export default Search;
