import {
  Sequelize,
  Model,
  ModelDefined,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  Association,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  Optional,
} from "sequelize";

interface ProductAttributes {
  id: number;
  name: string;
  description: string;
  image: string;
  images: string[];
  options: string[] | null;
  avgRating: number;
  price: number;
  oldPrice: number | null;
}

// Some attributes are optional in `Product.build` and `Product.create` calls
interface ProductCreationAttributes
  extends Optional<
    ProductAttributes,
    "id" | "options" | "oldPrice" | "images"
  > {}

class Product
  extends Model<ProductAttributes, ProductCreationAttributes>
  implements ProductAttributes
{
  public id!: number;
  public name!: string;
  public description!: string;
  public image!: string;
  public images!: string[];
  public options!: string[] | null;
  public avgRating!: number;
  public price!: number;
  public oldPrice!: number | null;
  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function ProductFactory(sequelize: Sequelize) {
  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      images: {
        type: DataTypes.STRING,
      },
      options: {
        type: DataTypes.STRING,
      },
      avgRating: {
        type: DataTypes.DOUBLE,
      },
      price: {
        type: DataTypes.DOUBLE,
      },
      oldPrice: {
        type: DataTypes.DOUBLE,
      },
    },
    {
      tableName: "products",
      sequelize, // passing the `sequelize` instance is required
    }
  );
  return Product;
}
