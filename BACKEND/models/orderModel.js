import { DataTypes } from "sequelize";
import db from '../utils/connection.js'
import Cart from "./cart.js";


const Order = db.define(
    
    "Order", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Totalharga: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        tableName: "order",
    }

);
Cart.hasMany(Order, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
Order.belongsTo(Cart, {
    foreignKey: "CartId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})




export default Order;
    