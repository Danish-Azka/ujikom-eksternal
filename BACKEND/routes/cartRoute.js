import express from "express"
import { createCart, deleteCart, getCart, updateCart, getCartById, getCartByBuyerId } from "../controller/cartController.js";
const cartRoute = express.Router();

cartRoute.post("/cart/post", createCart)
cartRoute.get("/cart/get", getCart)
cartRoute.get("/cart/buyer/:BuyerId", getCartByBuyerId)
cartRoute.get("/cart/get/:id", getCartById)
cartRoute.put("/cart/update/:id", updateCart)
cartRoute.delete("/cart/delete/:id", deleteCart)

export{cartRoute}