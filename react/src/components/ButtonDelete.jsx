import axios from "axios";

const ButtonDelete = (params) => {
  const buku = params.idBuku;

  const handleDelete = async (params) => {
    if (!buku) {
      const idpenerbit = params.idPenerbit;
      try {
        await axios.delete("http://localhost:3001/penerbit/" + idpenerbit);
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    } else {
      const idbuku = params.idBuku;
      try {
        await axios.delete("http://localhost:3001/buku/" + idbuku);
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <button
      className="w-14 bg-red-500 hover:bg-red-700 text-black "
      onClick={() => handleDelete(params)}>
      Delete
    </button>
  );
};

export default ButtonDelete;
