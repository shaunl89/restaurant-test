// requiring of modules installed
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const methodOverride = require('method-override')

// middleware setup
app.use(express.static('public'))
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(methodOverride('_method'))

// requiring routers


// routes setup
app.get('/', function (req, res) {
  res.send('world hello world')
})

app.listen(3000, function () {
  console.log('Express started on port 3000')
})
