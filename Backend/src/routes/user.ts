import express from "express";
import userController from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", userController.getUser);
userRouter.get("/:id", userController.getUserById);
userRouter.post("/", userController.addUser);
userRouter.post("/:userId/cart/:cartId", userController.addCartToUser);

export default userRouter;
