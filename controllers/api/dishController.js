const db = require('../../models')

function index (req, res) {
  db.dish.findAll().then(function (dishes) {
    res.json({
      dishes: dishes
    })
  }).catch(function (err) {
    console.log(err)
  })
}

function nextDish (req, res) {
  db.ordersDishes.findOne({
    order: [
      [ 'createdAt', 'ASC' ]
    ]
  }).then(function (orderDish) {
    db.dish.find({
      where: { id: orderDish.dishId }
    }).then(function (dish) {
      res.json({
        id: dish.id,
        name: dish.name,
        description: dish.description,
        portions: orderDish.portions
      })
    }).catch(function (err) {
      console.log(err)
    })
  })
}

module.exports = {
  index,
  nextDish
}
