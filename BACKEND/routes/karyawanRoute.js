import express from "express"
import { createKaryawan, getKaryawan, getKaryawanById, updateKaryawan, deleteKaryawan, getKaryawanByDivisi} from "../controller/karyawanController.js";
const karyawanRoute = express.Router();

karyawanRoute.post("/karyawan/post", createKaryawan)
karyawanRoute.get("/karyawan/get", getKaryawan)
karyawanRoute.get("/karyawan/get/:id", getKaryawanById)
karyawanRoute.get("/karyawan/get/divisi/:divisi", getKaryawanByDivisi)
karyawanRoute.put("/karyawan/update/:id", updateKaryawan)
karyawanRoute.delete("/karyawan/delete/:id", deleteKaryawan)

export{karyawanRoute}