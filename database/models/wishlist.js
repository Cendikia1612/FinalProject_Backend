'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wishlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Product, {
        through: "Wishlist_Product",
        as: "products",
        foreignKey: "productId"
      });
      this.belongsTo(models.User, { 
        through: "Wishlist_Product",
        as: "userAsBuyer",
        foreignKey: "userId" 
      });
    }
  }
  Wishlist.init({
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Wishlist',
  });
  return Wishlist;
};