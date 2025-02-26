import express from "express"
import { createBuyer, deleteBuyer, getBuyer,getBuyerById, updateBuyer } from "../controller/buyerController.js";
const buyerRoute = express.Router();

buyerRoute.post("/buyer/post", createBuyer)
buyerRoute.get("/buyer/get", getBuyer)
buyerRoute.get("/buyer/get/:id", getBuyerById)
buyerRoute.put("/buyer/update/:id", updateBuyer)
buyerRoute.delete("/buyer/delete/:id", deleteBuyer)

export{buyerRoute}