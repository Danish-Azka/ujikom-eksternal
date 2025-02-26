import express from "express"
import { createTransaction, getTransactionById, getTransactions } from "../controller/transaksiShop.js";
const transaksiShopRoute = express.Router();

transaksiShopRoute.post("/transaksiShop/post", createTransaction)
transaksiShopRoute.get("/transaksiShop/get", getTransactions)
transaksiShopRoute.get("/transaksiShop/get/:id", getTransactionById)

export{transaksiShopRoute}