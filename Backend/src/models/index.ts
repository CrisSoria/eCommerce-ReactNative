import { Sequelize } from "sequelize";
import { CartFactory, Cart as CartClass } from "./Cart";
import { UserFactory, User as UserClass } from "./User";

import dotenv from "dotenv";
dotenv.config();

export interface DB {
  sequelize: Sequelize;
  Cart: typeof CartClass;
  User: typeof UserClass;
}

const { DB_USER, DB_PASSWORD, DB_URL, DB_NAME, DB_PORT } = process.env;

export const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_URL}:${DB_PORT}/${DB_NAME}`
);

const Cart = CartFactory(sequelize);
const User = UserFactory(sequelize);

User.belongsToMany(Cart, { through: `userxcart` });
Cart.belongsToMany(User, { through: `userxcart` });

const db: DB = {
  sequelize,
  User,
  Cart,
};

export default db;
