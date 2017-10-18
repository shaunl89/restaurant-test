const express = require('express')
const router = express.Router()

const dishController = require('../controllers/api/dishController')
const orderController = require('../controllers/api/orderController')
const customerController = require('../controllers/api/customerController')

router.get('/api/customer/dish', dishController.index)
router.post('/api/customer', customerController.create)
router.post('/api/customer/order', orderController.create)

router.get('/api/chef/dish', dishController.nextDish)

module.exports = router
