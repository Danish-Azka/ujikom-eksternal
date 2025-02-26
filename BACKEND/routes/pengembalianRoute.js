import express from "express"
import { createPengembalian, getPengembalian, getPengembalianById, updatePengembalian, deletePengembalian} from "../controller/pengembalianController.js";
const pengembalianRoute = express.Router();

pengembalianRoute.get("/pengembalian/get", getPengembalian)
pengembalianRoute.post("/pengembalian/post", createPengembalian)
pengembalianRoute.get("/pengembalian/get/:id", getPengembalianById)
pengembalianRoute.put("/pengembalian/update/:id", updatePengembalian)
pengembalianRoute.delete("/pengembalian/delete/:id", deletePengembalian)

export{pengembalianRoute}