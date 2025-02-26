import { DataTypes } from "sequelize";
import db from '../utils/connection.js';
import Cart from "./cart.js";
import Order from "./orderModel.js";
const Kwitansi = db.define("Kwitansi", {


}, { tableName: "kwitansi" });

export default Kwitansi;
