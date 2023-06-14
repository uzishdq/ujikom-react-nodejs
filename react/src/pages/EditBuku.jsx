import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const EditBuku = () => {
  const [newBookData, setNewBookData] = useState({});
  const [penerbit, setPenerbit] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const bookId = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1
  );

  function handleChange(event) {
    setNewBookData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await axios.post(`http://localhost:3001/buku/${bookId}`, newBookData);
      navigate("/admin");
    } catch (err) {
      throw new Error(err);
    }
  }

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

  return (
    <div className="flex flex-col gap-4 px-20 py-10">
      <h1 className="text-xl font-medium text-center">Ubah Data Buku</h1>
      <form onSubmit={handleSubmit}>
        <label className="grid gap-2 grid-cols-1 py-2">
          <span className="block text-md font-medium text-slate-700">
            KATEGORI
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Bisnis"
            name="kategoriBuku"
            type="text"
            required
            onChange={handleChange}
          />
        </label>
        <label className="grid gap-2 grid-cols-1 py-2">
          <span className="block text-md font-medium text-slate-700">
            JUDUL BUKU
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Marketing Online"
            name="namaBuku"
            type="text"
            required
            onChange={handleChange}
          />
        </label>
        <label className="grid gap-2 grid-cols-1 py-2">
          <span className="block text-md font-medium text-slate-700">
            HARGA BUKU
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Rp. 50.000"
            name="hargaBuku"
            type="number"
            required
            onChange={handleChange}
          />
        </label>
        <label className="grid gap-2 grid-cols-1 py-2">
          <span className="block text-md font-medium text-slate-700">
            STOK BUKU
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="21"
            name="stokBuku"
            type="number"
            required
            onChange={handleChange}
          />
        </label>
        <label className="grid gap-2 grid-cols-1 py-2">
          <span className="block text-md font-medium text-slate-700">
            PENERBIT
          </span>
          <select
            className="bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            name="idPenerbit"
            onChange={handleChange}
          >
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
          >
            Updatde
          </button>
        </label>
      </form>
    </div>
  );
};

export default EditBuku;
