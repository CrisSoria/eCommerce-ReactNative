import {
  Sequelize,
  Model,
  ModelDefined,
  DataTypes,
  Optional,
  BelongsToManyGetAssociationsMixin,
  BelongsToManyAddAssociationMixin,
  BelongsToManyAddAssociationsMixin,
  BelongsToManyHasAssociationMixin,
  BelongsToManyCountAssociationsMixin,
  BelongsToManySetAssociationsMixin,
  BelongsToManyRemoveAssociationMixin,
  BelongsToManyRemoveAssociationsMixin,
  BelongsToManyCreateAssociationMixin,
  Association,
} from "sequelize";
import { User } from "./User";

export interface CartAttributes {
  id: number;
  quantity: number;
  price: number;
}

interface CartCreationAttributes extends Optional<CartAttributes, "id"> {}

export class Cart
  extends Model<CartAttributes, CartCreationAttributes>
  implements CartAttributes
{
  public id!: number;
  public quantity!: number;
  public price!: number;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public getUser!: BelongsToManyGetAssociationsMixin<User>;
  public addUser!: BelongsToManyAddAssociationMixin<User, number>;
  public addUsers!: BelongsToManyAddAssociationsMixin<User[], number>;
  public hasUser!: BelongsToManyHasAssociationMixin<User, number>;
  public countUser!: BelongsToManyCountAssociationsMixin;
  public setUser!: BelongsToManySetAssociationsMixin<User[], number>;
  public removeUser!: BelongsToManyRemoveAssociationMixin<User, number>;
  public removeUsers!: BelongsToManyRemoveAssociationsMixin<User[], number>;
  public createUser!: BelongsToManyCreateAssociationMixin<User>;

  public readonly user?: User[];

  public static association: {
    user: Association<Cart, User>; // revisar porque no estoy pudiendo usarlo en el include del controller
  };
}

export function CartFactory(sequelize: Sequelize) {
  Cart.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    },
    {
      tableName: "carts",
      sequelize, // passing the `sequelize` instance is required
    }
  );
  return Cart;
}
