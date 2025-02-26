import { DataTypes } from "sequelize";
import db from '../utils/connection.js'
import Product from "./productModel.js";
import Buyer from "./buyer.js";
import Shop from "./shopModels.js";

const Cart = db.define(
    
    "Cart", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,    
        allowNull: false
    },
    jumlah: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Totalharga: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        tableName: "cart",
    }

);
Product.hasMany(Cart, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
Cart.belongsTo(Product, {
    foreignKey: "ProductId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})
Buyer.hasMany(Cart, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
Cart.belongsTo(Buyer, {
    foreignKey: "BuyerId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})
Shop.hasMany(Cart, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
Cart.belongsTo(Shop, {
    foreignKey: "ShopId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})



export default Cart;
    