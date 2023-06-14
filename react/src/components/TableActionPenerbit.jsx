import React, { useEffect, useState } from "react";
import ButtonEdit from "./ButtonEdit";
import ButtonDelete from "./ButtonDelete";
import axios from "axios";

const TableActionPenerbit = () => {
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

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            ID PENERBIT
          </th>
          <th scope="col" className="px-6 py-3">
            NAMA PEBERBIT
          </th>
          <th scope="col" className="px-6 py-3">
            ALAMAT PENERBIT
          </th>
          <th scope="col" className="px-6 py-3">
            KOTA PENERBIT
          </th>
          <th scope="col" className="px-6 py-3">
            NO TELEPON
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {penerbit.map((penerbit) => (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            key={penerbit.ID_PENERBIT}>
            <td className="px-6 py-4 ">{penerbit.ID_PENERBIT}</td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {penerbit.NAMA_PENERBIT}
            </td>
            <td className="px-6 py-4">{penerbit.ALAMAT_PENERBIT}</td>
            <td className="px-6 py-4">{penerbit.KOTA_PENERBIT}</td>
            <td className="px-6 py-4">{penerbit.TLP}</td>
            <td className="px-6 py-4">
              <ButtonEdit idPenerbit={penerbit.ID_PENERBIT} />
              <ButtonDelete idPenerbit={penerbit.ID_PENERBIT} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableActionPenerbit;
