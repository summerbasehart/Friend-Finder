const { createConnection } = require('mysql2')
const express = require('express')
const path = require('path')

// module.exports = createConnection({
//   host: 'localhost',
//   port: '3306',
//   user: 'root',
//   password: 'Phil!1993',
//   database: 'friendFinder_db'
// })

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(3000, function() {
  console.log("server running")
})

require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)