import React, { useState, useEffect } from 'react';
import { IoCar, IoCarSport, IoEyeOffSharp, IoEyeSharp, IoLogoInstagram } from 'react-icons/io5';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const LoginJwt = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [alertShow, setAlertShow] = useState(false);
  const [warn, setWarn] = useState(false);
  const [salah, setSalah] = useState("");
  const navigate = useNavigate();

  // Cek apakah token sudah ada di localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/display");
    }
  }, [navigate]);

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post("http://localhost:3009/admin/login", { email, password });

      const token = response.data.accessToken;
      if (token) {
        localStorage.setItem("token", token);
        console.log("Token:", token);
        navigate("/display");
      } else {
        throw new Error("Token tidak ditemukan dalam respons");
      }

    } catch (error) {
      setError(error.response?.data?.message || "Login gagal");
      setAlertShow(true);
      setSalah('border-red-500');
      setWarn(true);
    }
  };

  // Handle alert hide
  useEffect(() => {
    if (alertShow) {
      const timer = setTimeout(() => {
        setAlertShow(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [alertShow]);

  return (
    <div id="bg" className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
          <h1 className="text-center text-2xl font-bold">Welcome</h1>
          <h6 className="text-center text-sm mt-2">
            <span className="px-2 py-1 bg-gray-200 rounded">To RentCarkuuu</span>
          </h6>
          <div className="mt-6">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none input focus:ring-2 ${salah}`}
                placeholder="Enter Your Email Address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none input focus:ring-2 ${salah}`}
                  placeholder="Enter Your Password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={handleShowPassword}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <IoEyeOffSharp size={24} /> : <IoEyeSharp size={24} />}
                </button>
              </div>
              {warn && <p className="text-red-500">Data yang dimasukkan salah</p>}
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600"
              >
                Login
              </button>
              <p className="text-center pt-4 w-100 text-blue-500 hover:underline">
                  <Link to="/sign">Don't Have an Account? <span className="fw-bolder text-primary">Sign Up</span></Link>
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

export default LoginJwt;
