'use strict'
module.exports = (sequelize, DataTypes) => {
  var dish = sequelize.define('dish', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER,
    duration: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // each dish belongs to an order
        models.dish.belongsTo(models.order)
        // establish many to many relationship between orders and dishes through joined table ordersDishes
        models.dish.belongsToMany(models.order, {through: 'ordersDishes'})
      }
    }
  })
  return dish
}
