import React, { useEffect, useState } from "react";
import "./search.css";
import { FiSearch } from "react-icons/fi";
import { storeData } from "../../assets/data/dummyData";
import { useLocation, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setShowInput(false);
  }, [location.pathname]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm("");

    if (searchTerm.trim() === "") {
      setNoResults(false);
      return;
    }

    const filteredData = storeData.filter((items) => {
      return items.type.toLowerCase().includes(searchTerm.toLowerCase());
    });

    if (filteredData.length > 0) {
      const type = filteredData[0].type;
      navigate(`/filteredProducts/${type}`);
    } else {
      setNoResults(true);
    }
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch} className="search__form">
        {showInput && (
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}
        <button type="submit" onClick={() => setShowInput(!showInput)}>
          <FiSearch title="Search" className="search__icon" size={18} />
        </button>
      </form>

      {noResults && (
        <div className="search__error">
          <h3>No products found</h3>
          <span onClick={() => setNoResults(false)}>
            <RxCross2 size={20} />
          </span>
        </div>
      )}
    </div>
  );
};

export default Search;
