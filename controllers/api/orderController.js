const db = require('../../models')

function create (req, res) {
  const customerId = req.body.customerId
  const dishes = req.body.dishes

  db.order.create({
    customerId
  }).then(function (order) {
    dishes.forEach(function (dish) {
      db.ordersDishes.create({
        orderId: order.id,
        dishId: dish.id,
        portions: dish.portions,
        fulfilled: false
      })
    })
  }).catch(function (err) {
    console.log('create error', err)
  })
}

module.exports = {
  create
}
