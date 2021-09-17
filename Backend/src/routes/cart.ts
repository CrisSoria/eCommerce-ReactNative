import express from "express";
import cartController from "../controllers/cartController";

const cartRouter = express.Router();

cartRouter.get("/", cartController.getCart);
cartRouter.get("/:id", cartController.getCartById);
cartRouter.post("/", cartController.addCart);
cartRouter.post("/:cartId/user/:userId", cartController.addUserToCart);

export default cartRouter;
