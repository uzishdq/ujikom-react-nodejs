import React from 'react'
import { Link } from "react-router-dom";

const ButtonTambah = (props) => {
  return (
    <button className="w-20 bg-sky-500 hover:bg-sky-700 rounded-lg ">
      <Link to={props.name}>
      Tambah
      </Link>
    </button>
  )
}

export default ButtonTambah