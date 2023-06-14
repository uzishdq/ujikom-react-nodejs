import React from 'react'
import Table from '../components/Table'

const Home = () => {
  return (
    <div className='flex flex-col gap-4 px-20 py-10 items-center'>
      <div>
        <h1 className='text-2xl'>
        List Buku Unibookstore
        </h1>
      </div>
      <Table/>
    </div>
  )
}

export default Home