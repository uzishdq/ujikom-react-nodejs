import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between px-20 py-5 items-center'>
        <div>
            <h1 className='text-3xl text-gray-800 font-bold'>Unibookstore</h1>
        </div>
        <div>
            <ul className='flex items-center gap-[4vw]'>
                <li>
                    <a className='hover:text-gray' href="/">Home</a>
                </li>
                <li>
                    <a className='hover:text-gray' href="/admin">Admin</a>
                </li>
                <li>
                    <a className='hover:text-gray' href="/pengadaan">Pengadaan</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar