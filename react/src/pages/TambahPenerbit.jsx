import React from 'react'

const TambahPenerbit = () => {
  return (
    <div className="flex flex-col gap-4 px-20 py-10">
    <h1 className="text-xl font-medium text-center">Tambah Data Penerbit</h1>
    <form>
      <label className="grid gap-2 grid-cols-1 py-2">
        <span className="block text-md font-medium text-slate-700">ID PENERBIT</span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="SP01"
          type="text"
        />
      </label>
      <label className="grid gap-2 grid-cols-1 py-2">
        <span className="block text-md font-medium text-slate-700">NAMA PENERBIT</span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Penerbit Informatika"
          type="text"
        />
      </label>
      <label className="grid gap-2 grid-cols-1 py-2">
        <span className="block text-md font-medium text-slate-700">ALAMAT PENERBIT</span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="jl.Buahbatu no.121"
          type="text"
        />
      </label>
      <label className="grid gap-2 grid-cols-1 py-2">
        <span className="block text-md font-medium text-slate-700">KOTA PENERBIT</span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Bandung"
          type="text"
        />
      </label>
      <label className="grid gap-2 grid-cols-1 py-2">
        <span className="block text-md font-medium text-slate-700">NO TELEPON</span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="081-***-**"
          maxLength="11"
          type="text"
        />
      </label>
    </form>
  </div>
  )
}

export default TambahPenerbit