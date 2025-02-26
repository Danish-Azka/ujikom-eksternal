import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Display from './main/Display';
import Client from './main/Client';
import Mobil from './main/Mobil';
import Transaksi from './main/Transaksi';
import Karyawan from './main/Karyawan';
import Pengembalian from './main/Pengembalian';
// import Login from './main/Login';
import Sign from './main/Sign';
import AdminProf from './component/AdminProf';
import Landing from './LANDINGPAGE/Landing'
import LoginJwt from './main/LoginJwt';
import ShopDasb from './UJIKOM/ShopDasb';
import Product from './UJIKOM/Product';
import ClientSite from './UJIKOM/client/ClientSite';
import Sparepart from './UJIKOM/client/compClient/ALLKATEGORI/Sparepart';
import Aksesoris from './UJIKOM/client/compClient/ALLKATEGORI/Aksesoris';
import Perawatan from './UJIKOM/client/compClient/ALLKATEGORI/Perawatan';
import Modifikasi from './UJIKOM/client/compClient/ALLKATEGORI/Modifikasi';
import LogAdm from './UJIKOM/LogComp/LogAdm';
import LogBuyer from './UJIKOM/LogComp/LogBuyer';
import Detail from './UJIKOM/client/compClient/Detail';
import SignBuyer from './UJIKOM/LogComp/SignBuyer';
import TransactionPage from './UJIKOM/client/compClient/TransactionPage'

const App = () => {
  return (

    <div>
    <BrowserRouter basename="/uts-FrontEnd-Danish-Azka/">

      <Routes>
        <Route path="/" element={<LoginJwt/>} />
        <Route path="/client" element={<Client />} />
        <Route path="/mobil" element={<Mobil />} />
        <Route path="/transaksi" element={<Transaksi />} />
        <Route path="/karyawan" element={<Karyawan />} />
        <Route path="/pengembalian" element={<Pengembalian />} />
        <Route path="/display" element={<Display />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/profil" element={<AdminProf />} />
        <Route path="/land" element={<Landing />} />

        {/* UJIKOM UPDATE */}
{/* adminsite */}
        <Route path="/penjualan" element={<ShopDasb/>} />
        <Route path="/product" element={<Product/>} />
{/* login and sign */}
        <Route path="/logupgear" element={<LogAdm/>} />
        <Route path="/logApp" element={<LogBuyer/>} />
        <Route path="/sb" element={<SignBuyer/>} />
{/* clientsite */}
        <Route path="/cs" element={<ClientSite/>} />
        <Route path="/sparepart" element={<Sparepart/>} />
        <Route path="/aksesoris" element={<Aksesoris/>} />
        <Route path="/perawatan" element={<Perawatan/>} />
        <Route path="/Modifikasi" element={<Modifikasi/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/transaksiShop/:id" element={<TransactionPage/>} />


        
        {/* <Route path="/jwt" element={<LoginJwt/>} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
