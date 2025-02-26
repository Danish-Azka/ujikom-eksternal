import express from "express"
import { createClient, deleteClient, getClient, updateClient,  getClientById} from "../controller/clientController.js";
const clientRoute = express.Router();

clientRoute.post("/client/post", createClient)
clientRoute.get("/client/get", getClient)
clientRoute.get("/client/get/:id", getClientById)
clientRoute.put("/client/update/:id", updateClient)
clientRoute.delete("/client/delete/:id", deleteClient)

export{clientRoute}