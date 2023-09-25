import React from "react";
import "./filterError.css";

const FilterError = () => {
  return (
    <center>
      <h2 className="filterError">
        Sorry no products match your filter search. Clear the filter and try
        again!
      </h2>
    </center>
  );
};

export default FilterError;
