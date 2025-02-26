import React, { useEffect, useState } from "react";
import { IoCar, IoCarSport, IoEyeOffSharp, IoEyeSharp, IoLogoInstagram } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = ({ apiUrl, redirectTo, greetings, appName, userData, updateLocalStorage }) => {
  const [alertShow, setAlertShow] = useState(false);
  const [salah, setSalah] = useState("");
  const [warn, setWarn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => {
    setShowPassword((show) => !show);
  };

  const getUsers = async () => {
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };

  const handleClick = async () => {
    const emailInput = document.querySelector(".inputEmail").value;
    const passwordInput = document.querySelector(".inputPassword").value;

    try {
      const response = await getUsers();
      const users = response.users || response;

      let user = users.find((user) => emailInput === user.email && passwordInput === user.password);

      if (user) {
        updateLocalStorage(user); // 🔹 Menggunakan fungsi dari props untuk update localStorage
        navigate(redirectTo);
      } else {
        setAlertShow(true);
        setSalah("border-red-500");
        setWarn(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (alertShow) {
      const timer = setTimeout(() => {
        setAlertShow(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [alertShow]);

  return (
    <div id="bg" className="flex items-center justify-center min-h-screen bg-gray-400">
      <div className="flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
          <h1 className="text-center text-2xl font-bold">{greetings}</h1>
          <h6 className="text-center text-sm mt-2">
            <span className="px-2 py-1 bg-gray-200 rounded">{appName}</span>
          </h6>
          <div className="mt-6">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                className={`w-full px-4 py-2 border inputEmail rounded-lg focus:outline-none input focus:ring-2 ${salah}`}
                placeholder="Enter Your Email Address..."
                defaultValue={userData.email} // 🔹 Menggunakan props userData
              />
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`w-full px-4 py-2 border inputPassword rounded-lg focus:outline-none input focus:ring-2 ${salah}`}
                  placeholder="Enter Your Password..."
                />
                <button
                  type="button"
                  onClick={handleShow}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <IoEyeOffSharp size={24} /> : <IoEyeSharp size={24} />}
                </button>
              </div>
              {warn && <p className="text-red-500">Data yang dimasukkan salah</p>}
              <button onClick={handleClick} className="bg-[#1D1E20] text-white w-full py-2 rounded-lg hover:bg-blue-600">
                Submit
              </button>

              <p className="text-center pt-4 w-100 text-blue-500 hover:underline">
                  <Link to="/sb">Don't Have an Account? <span className="fw-bolder text-primary">Sign Up</span></Link>
              </p>

            </div>
            <div className="flex justify-center gap-4 mt-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
                <a href="https://www.instagram.com/azkrmt_" target="_blank" rel="noopener noreferrer">
                  <IoLogoInstagram className="text-gray-800" />
                </a>
              </div>
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <IoCarSport />
              </div>
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <IoCar />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
