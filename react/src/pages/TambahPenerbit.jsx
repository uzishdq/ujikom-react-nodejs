import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TambahPenerbit = () => {
  const [penerbit, setPenerbit] = useState({});

  const navigate = useNavigate();

  function handleChange(event) {
    setPenerbit((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/penerbit", penerbit);
      navigate("/admin");
    } catch (err) {
      throw new Error(err);
    }
  }
  return (
    <div className="flex flex-col gap-4 px-20 py-10">
      <h1 className="text-xl font-medium text-center">Tambah Data Penerbit</h1>
      <form onSubmit={handleSubmit}>
        <label className="grid gap-2 grid-cols-1 py-2">
          <span className="block text-md font-medium text-slate-700">
            ID PENERBIT
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="SP01"
            type="text"
            onChange={handleChange}
          />
        </label>
        <label className="grid gap-2 grid-cols-1 py-2">
          <span className="block text-md font-medium text-slate-700">
            NAMA PENERBIT
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Penerbit Informatika"
            type="text"
            onChange={handleChange}
          />
        </label>
        <label className="grid gap-2 grid-cols-1 py-2">
          <span className="block text-md font-medium text-slate-700">
            ALAMAT PENERBIT
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="jl.Buahbatu no.121"
            type="text"
            onChange={handleChange}
          />
        </label>
        <label className="grid gap-2 grid-cols-1 py-2">
          <span className="block text-md font-medium text-slate-700">
            KOTA PENERBIT
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Bandung"
            type="text"
            onChange={handleChange}
          />
        </label>
        <label className="grid gap-2 grid-cols-1 py-2">
          <span className="block text-md font-medium text-slate-700">
            NO TELEPON
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="081-***-**"
            maxLength="11"
            type="text"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TambahPenerbit;
