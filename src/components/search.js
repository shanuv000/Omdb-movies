import React from "react";
import { Search as Seinn } from "react-bootstrap-icons";

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
          className="btn btn-success col-sm-1 col-3 align-items-center"
          onClick={handleSearch}
        >
          <Seinn className="" />
          <i class="bi-alarm"></i>
        </button>
      </div>
    </>
  );
};
export default Search;
