'use strict'
module.exports = (sequelize, DataTypes) => {
  var order = sequelize.define('order', {
    customerId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // each order belongs to a customer
        models.order.belongsTo(models.customer)
        // establish many to many relationship between orders and dishes through joined table ordersDishes
        models.order.belongsToMany(models.dish, {through: 'ordersDishes'})
      }
    }
  })
  return order
}
