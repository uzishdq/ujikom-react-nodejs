import React from "react";
import { Link } from "react-router-dom";

const ButtonEdit = (params) => {
  function getValue(params) {
    let value = "";

    if (!params.idBuku) {
      value = `/edit-penerbit/${params.idPenerbit}`;
    } else {
      value = `/edit-buku/${params.idBuku}`;
    }
    return value;
  }

  return (
    <button className="w-10 bg-green-500 hover:bg-green-700 text-black ">
      <Link to={getValue(params)}>Edit</Link>
    </button>
  );
};

export default ButtonEdit;
