const db = require('../../models')

function index (req, res) {
  db.dish.findAll().then(function (dishes) {
    res.render('admin', {
      dishes: dishes
    })
  }).catch(function (err) {
    console.log(err)
  })
}

module.exports = {
  index
}
