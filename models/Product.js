// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      // integer, no null values
      // primary key, uses auto increment
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      // string, no null values
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      // decimal, no null values
      // validates the value is a decimal
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      // integer, no null values
      // default value of 10
      // validates value is numeric
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      // integer, references category id
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
