import express from "express"
import { createShop, getShop, getShopById, updateShop, deleteShop } from "../controller/shopController.js";
const shopRoutes = express.Router();

shopRoutes.post("/shop/post", createShop)
shopRoutes.get("/shop/get", getShop)
shopRoutes.get("/shop/get/:id", getShopById)
shopRoutes.put("/shop/update/:id", updateShop)
shopRoutes.delete("/shop/delete/:id", deleteShop)

export{shopRoutes}