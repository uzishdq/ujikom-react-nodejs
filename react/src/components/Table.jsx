import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
  const [buku, setbuku] = useState([]);

  useEffect(() => {
    const fectAllBuku = async () => {
      try {
        const res = await axios.get("http://localhost:3001/buku");
        setbuku(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fectAllBuku();
  }, []);

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            ID BUKU
          </th>
          <th scope="col" className="px-6 py-3">
            KATEGORI
          </th>
          <th scope="col" className="px-6 py-3">
            JUDUL BUKU
          </th>
          <th scope="col" className="px-6 py-3">
            HARGA BUKU
          </th>
          <th scope="col" className="px-6 py-3">
            STOK BUKU
          </th>
          <th scope="col" className="px-6 py-3">
            PENERBIT
          </th>
        </tr>
      </thead>
      <tbody>
        {buku.length > 0 && (
          <>
            {buku?.map((buku) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={buku.ID_BUKU}
              >
                <td className="px-6 py-4 ">{buku.ID_BUKU}</td>
                <td className="px-6 py-4">{buku.KATEGORI_BUKU}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {buku.NAMA_BUKU}
                </td>
                <td className="px-6 py-4">{buku.HARGA_BUKU}</td>
                <td className="px-6 py-4">{buku.STOK_BUKU}</td>
                <td className="px-6 py-4">{buku.ID_PENERBIT}</td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  );
};

export default Table;
