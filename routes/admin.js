const express = require('express')
const router = express.Router()

const indexController = require('../controllers/admin/indexController')
const adminController = require('../controllers/admin/adminController')
const dishController = require('../controllers/admin/dishController')

router.get('/', indexController.index)
router.get('/admin', adminController.index)
router.post('/admin/dish', dishController.create)
router.get('/admin/dish/:id', dishController.show)
router.patch('/admin/dish/:id', dishController.update)
router.delete('/admin/dish/:id', dishController.destroy)

module.exports = router
