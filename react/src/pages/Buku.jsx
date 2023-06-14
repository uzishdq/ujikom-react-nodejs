import ButtonTambah from '../components/ButtonTambah'
import TableActionBuku from '../components/TableActionBuku'

const Buku = () => {

  return (
    <div className=" flex flex-col gap-4 px-20 py-10">
    <div className=' flex justify-between'>
    <h1 className='text-2xl'>Data Buku</h1>
    <ButtonTambah name='/tambah-buku'/>
    </div>
    <TableActionBuku/>
</div>
  )
}

export default Buku