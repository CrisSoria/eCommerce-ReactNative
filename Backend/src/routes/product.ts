import express from "express";

const productsRouter = express.Router();

productsRouter.get("/", (req, res) => {
  res.send("soy un producto :D");
});

export default productsRouter;
