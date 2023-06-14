import { BrowserRouter,Routes,Route } from "react-router-dom";
import TambahBuku from "./pages/TambahBuku";
import EditBuku from "./pages/EditBuku";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Pengadaan from "./pages/Pengadaan";
import TambahPenerbit from "./pages/TambahPenerbit";
import Error from "./pages/Error";
import EditPenerbit from "./pages/EditPenerbit";


function App() {
  return (
    <div>
      <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Error/>}/>
            <Route path="/" element={<Home/> }/>
            <Route path="/tambah-buku" element={<TambahBuku/>}/>
            <Route path="/edit-buku/:id" element={<EditBuku/>}/>
            <Route path="/edit-penerbit/:id" element={<EditPenerbit/>}/>
            <Route path="/tambah-penerbit" element={<TambahPenerbit/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/pengadaan" element={<Pengadaan/>}/>
          </Routes>
        </BrowserRouter>    
    </div>
  );
}

export default App;
