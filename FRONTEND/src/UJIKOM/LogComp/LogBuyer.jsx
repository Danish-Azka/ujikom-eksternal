import React, { useState, useEffect } from "react";
import Login from "./Login";

const LogBuyer = () => {
  const [userData, setUserData] = useState({
    idBuyer: localStorage.getItem("idBuyer") || "",
    namaBuyer: localStorage.getItem("namaBuyer") || "",
    emailBuyer: localStorage.getItem("emailBuyer") || "",
    gambarBuyer: localStorage.getItem("gambarBuyer") || "",
    noTelpBuyer: localStorage.getItem("noTelpBuyer") || ""
  });

  const updateLocalStorage = (user) => {
    localStorage.setItem("idBuyer", user.id);
    localStorage.setItem("namaBuyer", user.nama);
    localStorage.setItem("emailBuyer", user.email);
    localStorage.setItem("gambarBuyer", user.gambar);
    localStorage.setItem("noTelpBuyer", user.noTelp);

    setUserData({
      idBuyer: user.id,
      namaBuyer: user.nama,
      emailBuyer: user.email,
      gambarBuyer: user.gambar,
      noTelpBuyer: user.noTelpBuyer,
    });
  };

  return (
    <Login
      apiUrl="http://localhost:3009/buyer/get"
      redirectTo="/cs"
      greetings="Welcome to"
      appName="GearUp"
      userData={userData}
      updateLocalStorage={updateLocalStorage}
    />
    
  );
};

export default LogBuyer;
