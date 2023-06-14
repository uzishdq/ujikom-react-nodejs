import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TambahBuku = () => {
  const navigate = useNavigate();
  const [penerbit, setPenerbit] = useState([]);

  useEffect(() => {
    const fectAllPenerbit = async () => {
      try {
        const res = await axios.get("http://localhost:3001/penerbit");
        setPenerbit(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fectAllPenerbit();
  }, []);

  const [buku, setBuku] = useState({
    idBuku: "",
    idPenerbit: "",
    namaBuku: "",
    kategoriBuku: "",
    hargaBuku: null,
    stokBuku: null,
  });

  const handleChange = (e) => {
    setBuku((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClik = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/buku", buku);
      navigate("/admin");
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <div className="flex flex-col gap-4 px-20 py-10">
      <h1 className="text-xl font-medium text-center">Tambah Data Buku</h1>
      <form>
        <label className="grid gap-2 grid-cols-1 py-2">
          <span className="block text-md font-medium text-slate-700">
            ID BUKU
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="K001"
            onChange={handleChange}
            name="idBuku"
            type="text"
            required
          />
        </label>
        <label className="grid gap-2 grid-cols-1 py-2">
          <span className="block text-md font-medium text-slate-700">
            KATEGORI
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Bisnis"
            onChange={handleChange}
            name="kategoriBuku"
            type="text"
            required
          />
        </label>
        <label className="grid gap-2 grid-cols-1 py-2">
          <span className="block text-md font-medium text-slate-700">
            JUDUL BUKU
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Marketing Online"
            onChange={handleChange}
            name="namaBuku"
            type="text"
            required
          />
        </label>
        <label className="grid gap-2 grid-cols-1 py-2">
          <span className="block text-md font-medium text-slate-700">
            HARGA BUKU
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Rp. 50.000"
            onChange={handleChange}
            name="hargaBuku"
            type="number"
            required
          />
        </label>
        <label className="grid gap-2 grid-cols-1 py-2">
          <span className="block text-md font-medium text-slate-700">
            STOK BUKU
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="21"
            onChange={handleChange}
            name="stokBuku"
            type="number"
            required
          />
        </label>
        <label className="grid gap-2 grid-cols-1 py-2">
          <span className="block text-md font-medium text-slate-700">
            PENERBIT
          </span>
          <select
            className="bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            onChange={handleChange}
            name="idPenerbit">
            <option defaultValue="SP01">Pilih Penerbit</option>
            {penerbit.map((penerbit) => (
              <option key={penerbit.ID_PENERBIT} value={penerbit.ID_PENERBIT}>
                {penerbit.NAMA_PENERBIT}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 grid-cols-1 py-2">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            type="submit"
            onClick={handleClik}>
            Simpan
          </button>
        </label>
      </form>
    </div>
  );
};

export default TambahBuku;
