import React from 'react'
import Table from '../components/Table'

const Pengadaan = () => {
  return (
    <div className='flex flex-col gap-4 px-20 py-10 items-center'>
    <div>
        <h1 className='text-2xl'>Buku yang Harus dibeli</h1>
    </div>
    <Table/>
  </div>
  )
}

export default Pengadaan