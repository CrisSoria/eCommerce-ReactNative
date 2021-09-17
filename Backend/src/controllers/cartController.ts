import { Request, Response } from "express";
import db from "../models/index";

const cartModel = db.Cart;

class cartControllerClass {
  model: typeof cartModel = cartModel;

  getCart(req: Request, res: Response) {
    cartModel
      .findAll({
        include: {
          model: db.User,
        },
      })
      .then((carts) => res.send(carts))
      .catch((err) => {
        console.log(err);
      });
  }
  getCartById(req: Request, res: Response) {
    const id = req.params.id;
    cartModel
      .findByPk(id)
      .then((cart) => res.send(cart))
      .catch((err) => {
        console.log(err);
      });
  }
  addCart(req: Request, res: Response) {
    const cart = req.body;
    cartModel
      .create(cart)
      .then((cart) => res.send(cart))
      .catch((err) => {
        console.log(err);
      });
  }

  addUserToCart(req: Request, res: Response) {
    const cartId = req.params.cartId;
    const userId = req.params.userId;
    cartModel
      .findByPk(cartId)
      .then((cart) => {
        cart
          ? cart.addUser(+userId).then(() => res.sendStatus(201))
          : res.send("no se puso crear");
      })

      .catch((err) => {
        console.log(err);
      });
  }
}

const cartController = new cartControllerClass();

export default cartController;
