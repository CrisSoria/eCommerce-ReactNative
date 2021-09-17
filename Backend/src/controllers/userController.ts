import { Request, Response } from "express";
import db from "../models/index";

const userModel = db.User;

class userControllerClass {
  model: typeof userModel = userModel;

  getUser(req: Request, res: Response) {
    userModel
      .findAll()
      .then((users) => res.send(users))
      .catch((err) => {
        console.log(err);
      });
  }
  getUserById(req: Request, res: Response) {
    const id = req.params.id;
    userModel
      .findByPk(id)
      .then((user) => res.send(user))
      .catch((err) => {
        console.log(err);
      });
  }
  addUser(req: Request, res: Response) {
    const user = req.body;
    //faltaria hacer un control de errores para comprobar que el user sea correcto antes de querer crearlo (igualmente ahora lo haría sequelize por mi)
    userModel
      .create(user)
      .then((user) => res.send(user))
      .catch((err) => {
        console.log(err);
      });
  }

  addCartToUser(req: Request, res: Response) {
    const userId = req.params.userId;
    const cartId = req.params.cartId;
    userModel
      .findByPk(userId)
      .then((user) => {
        user
          ? user.addCart(+cartId).then(() => res.sendStatus(201))
          : res.send("no se puso crear");
      })

      .catch((err) => {
        console.log(err);
      });
  }
}

const userController = new userControllerClass();

export default userController;
