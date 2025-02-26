import Admin from "../models/adminModel.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
import bcrypt from "bcrypt";

// Membuat admin baru (tanpa hashing password)
export const createAdmin = async (req, res) => {
    try {
        const { nama, email, password, photo } = req.body;
        const admin = await Admin.create({ nama, email, password, photo });
        res.status(201).json(admin);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mendapatkan admin berdasarkan ID
export const getAdminById = async (req, res) => {
    try {
        const { id } = req.params;
        const admin = await Admin.findByPk(id);
        if (!admin) return res.status(404).json({ message: "Admin tidak ditemukan" });
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mendapatkan semua admin
export const getAdmin = async (req, res) => {
    try {
        const admin = await Admin.findAll();
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Register Admin dengan hashing password
export const registerAdmin = async (req, res) => {
    const { nama, email, password, photo, confPassword } = req.body;

    if (!nama || !email || !password || !photo || !confPassword) {
        return res.status(400).json({ message: "Pastikan semua field terisi" });
    }

    if (password !== confPassword) {
        return res.status(400).json({ message: "Password dan Confirm Password tidak cocok" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        await Admin.create({
            nama,
            email,
            password: hashedPassword,
            photo,
        });

        res.status(201).json({ message: "Register Berhasil" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Login Admin
export const loginAdmin = async (req, res) => {
    try {
        const admin = await Admin.findOne({ where: { email: req.body.email } });
        if (!admin) return res.status(404).json({ message: "Email belum terdaftar" });

        // Bandingkan password yang diinput dengan password hash di database
        const match = await bcrypt.compare(req.body.password, admin.password);
        if (!match) return res.status(400).json({ message: "Password salah" });

        const adminId = admin.id;
        const email = admin.email;

        const accessToken = jwt.sign({ adminId, email }, process.env.SECRET_ACCESS_TOKEN, { expiresIn: "1h" });
        const refreshToken = jwt.sign({ adminId, email }, process.env.SECRET_REFRESH_TOKEN, { expiresIn: "1d" });

        // Simpan refreshToken ke database (bisa dihindari untuk keamanan lebih baik)
        await Admin.update({ refresh_token: refreshToken }, { where: { id: adminId } });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Aktifkan secure hanya di production
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.json({ accessToken });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Logout Admin
export const logoutAdmin = async (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.status(204).json({ message: "No Content" });

        const admin = await Admin.findOne({ where: { refresh_token: refreshToken } });
        if (!admin) return res.status(204).json({ message: "No Content" });

        await Admin.update({ refresh_token: null }, { where: { id: admin.id } });

        res.clearCookie("refreshToken");
        res.status(200).json({ message: "Berhasil logout" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
    