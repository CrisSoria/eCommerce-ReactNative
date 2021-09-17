import express from "express";
import productsRoutes from "./product";
import cartRoutes from "./cart";
import userRoutes from "./user";

const router = express.Router();

router.use("/products", productsRoutes);
router.use("/cart", cartRoutes);
router.use("/user", userRoutes);

export default router;
