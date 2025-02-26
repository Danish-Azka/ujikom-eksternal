import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const TransaksiShop = db.define(
  "TransaksiShop",
  {
    id: {
      type: DataTypes.INTEGER, 
      autoIncrement: true, 
      primaryKey: true,
    },
    buyerId: {
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    items: {
      type: DataTypes.JSON, 
      allowNull: false,
    },
    totalHarga: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shippingCost: {
      type: DataTypes.INTEGER,
      defaultValue: 100000,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "Pending", 
    },
  },
  {
    tableName:"transaksiShop"
}
);

export default TransaksiShop;
