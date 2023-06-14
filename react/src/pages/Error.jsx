import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container mx-auto text-center">
      <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
        404
      </h2>
      <h4 className="mb-3 text-[22px] font-semibold leading-tight">
        Oops! That page can’t be found
      </h4>
      <p className="mb-8 text-lg">
        The page you are looking for it maybe deleted
      </p>
      <button>
        <Link to={"/"}> Back Home</Link>
      </button>
    </div>
  );
};

export default Error;
