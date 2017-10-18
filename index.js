// requiring of modules installed
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const adminRoutes = require('./routes/admin')
const apiRoutes = require('./routes/api')

// middleware setup
app.use(express.static('public'))
app.engine('handlebars', exphbs({
  defaultLayout: 'index'
}))
app.set('view engine', 'handlebars')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(methodOverride('_method'))

app.use('/', adminRoutes, apiRoutes)

app.listen(3000, function () {
  console.log('Express started on port 3000')
})
