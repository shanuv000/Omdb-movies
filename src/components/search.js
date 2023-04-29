import React from "react";
const Search = ({ setSearchTerm, handleSearch }) => {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="row my-2 p-2">
        <input
          className="form-control  col-8"
          type="text"
          placeholder="Search movies..."
          onChange={handleInputChange}
          aria-label=".form-control-lg example"
        />
        <button
          type="button"
          class="btn btn-success col-4"
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
