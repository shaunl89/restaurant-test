'use strict'
module.exports = (sequelize, DataTypes) => {
  var customer = sequelize.define('customer', {
    name: DataTypes.STRING,
    tableNumber: DataTypes.INTEGER,
    pax: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // customer can make more than one order
        models.customer.hasMany(models.order)
      }
    }
  })
  return customer
}
