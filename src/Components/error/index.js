import React from "react";
import "./error.css";
import { useRouteError } from "react-router-dom";
import { BiError } from "react-icons/bi";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="error">
      <span>
        <BiError size={45} />
      </span>
      <div className="error__details">
        <h1>
          OOPS! <br /> Something went wrong!
        </h1>
        <p>Check your internet connection or refresh the page.</p>
      </div>
    </div>
  );
};

export default Error;
