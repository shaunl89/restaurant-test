const db = require('../../models')

function create (req, res) {
  db.customer.create({
    name: req.body.name,
    tableNumber: req.body.tableNumber,
    pax: req.body.pax
  }).then(function (customer) {
    res.json({
      customer
    })
  }).catch(function (err) {
    console.log('create error', err)
  })
}

module.exports = {
  create
}
