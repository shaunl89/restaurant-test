const db = require('../../models')

function show (req, res) {
  db.dish.find({
    where: { id: req.params.id }
  }).then(function (dishes) {
    res.render('show', {
      dishes: dishes
    })
  })
}

function create (req, res) {
  db.dish.create({
    name: req.body.dish.name,
    description: req.body.dish.description,
    image: req.body.dish.image,
    price: req.body.dish.price,
    duration: req.body.dish.duration
  }).then(function (data) {
    res.redirect('/admin')
  }).catch(function (err) {
    console.log('create error', err)
  })
}

function destroy (req, res) {
  db.dish.destroy({
    where: { id: req.params.id }
  }).then(function () {
    res.redirect('/admin')
  }).catch(function (err) {
    console.log('destroy err', err)
  })
}

function update (req, res) {
  db.dish.update({
    name: req.body.dish.name,
    description: req.body.dish.description,
    image: req.body.dish.image,
    price: req.body.dish.price,
    duration: req.body.dish.duration
  }, {
    where: {
      id: req.params.id
    }
  }).then(function () {
    res.redirect('/admin')
  }).catch(function (err) {
    console.log('update error', err)
  })
}

module.exports = {
  create,
  show,
  update,
  destroy
}
