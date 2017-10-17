'use strict'
module.exports = (sequelize, DataTypes) => {
  var ordersDishes = sequelize.define('ordersDishes', {
    orderId: DataTypes.INTEGER,
    dishId: DataTypes.INTEGER,
    portions: DataTypes.INTEGER,
    fulfilled: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return ordersDishes
}
