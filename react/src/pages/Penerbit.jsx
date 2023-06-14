import React from "react";
import ButtonTambah from "../components/ButtonTambah";
import TableActionPenerbit from "../components/TableActionPenerbit";

const Penerbit = () => {
  return (
    <div className=" flex flex-col gap-4 px-20 py-10">
      <div className=" flex justify-between">
        <h1 className="text-2xl">Data Penerbit</h1>
        <ButtonTambah name="/tambah-penerbit" />
      </div>
      <TableActionPenerbit />
    </div>
  );
};

export default Penerbit;
