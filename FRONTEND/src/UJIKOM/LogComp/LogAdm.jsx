import React, { useState, useEffect } from "react";
import Login from "./Login";

const LogAdm = () => {
  const [userData, setUserData] = useState({
    idShop: localStorage.getItem("idShop") || "",
    nama: localStorage.getItem("nama") || "",
    email: localStorage.getItem("email") || "",
    gambar: localStorage.getItem("gambar") || "",
  });

  const updateLocalStorage = (user) => {
    localStorage.setItem("idShop", user.id);
    localStorage.setItem("nama", user.nama);
    localStorage.setItem("email", user.email);
    localStorage.setItem("gambar", user.gambar);

    setUserData({
      idShop: user.id,
      nama: user.nama,
      email: user.email,
      gambar: user.gambar,
    });
  };

  return (
    <Login
      apiUrl="http://localhost:3009/shop/get"
      redirectTo="/penjualan"
      greetings="Manage your"
      appName="GearUp"
      userData={userData}
      updateLocalStorage={updateLocalStorage}
    />
  );
};

export default LogAdm;
