import express from "express"
import { createTransaksi, getTransaksi, getTransaksiById, updateTransaksi, deleteTransaksi } from "../controller/transaksiController.js";
const transaksiRoute = express.Router();

transaksiRoute.post("/transaksi/post", createTransaksi)
transaksiRoute.get("/transaksi/get", getTransaksi)
transaksiRoute.get("/transaksi/get/:id", getTransaksiById)
transaksiRoute.put("/transaksi/update/:id", updateTransaksi)
transaksiRoute.delete("/transaksi/delete/:id", deleteTransaksi)

export{transaksiRoute}