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
import { Cart } from "./Cart";

// These are all the attributes in the User model
export interface UserAttributes {
  id: number;
  name: string;
  preferredName: string | null;
}

// Some attributes are optional in `User.build` and `User.create` calls
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public preferredName!: string | null; // for nullable fields

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public getCart!: BelongsToManyGetAssociationsMixin<Cart>;
  public addCart!: BelongsToManyAddAssociationMixin<Cart, number>; //recibe el carrito o el id
  public addCarts!: BelongsToManyAddAssociationsMixin<Cart[], number>;
  public hasCart!: BelongsToManyHasAssociationMixin<Cart, number>;
  public countCart!: BelongsToManyCountAssociationsMixin;
  public setCart!: BelongsToManySetAssociationsMixin<Cart[], number>;
  public removeCart!: BelongsToManyRemoveAssociationMixin<Cart, number>;
  public removeCarts!: BelongsToManyRemoveAssociationsMixin<Cart[], number>;
  public createCart!: BelongsToManyCreateAssociationMixin<Cart>;

  public readonly cart?: Cart[]; //para llamar a la propiedad y que me traiga los valores

  public static association: {
    cart: Association<User, Cart>;
  };
}

export function UserFactory(sequelize: Sequelize) {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      preferredName: {
        type: new DataTypes.STRING(128),
        allowNull: true,
      },
    },
    {
      tableName: "users",
      sequelize, // passing the `sequelize` instance is required
    }
  );
  return User;
}
