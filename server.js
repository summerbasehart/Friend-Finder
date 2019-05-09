const { createConnection } = require('mysql2')
const express = require('express')
const path = require('path')

module.exports = createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'Phil!1993',
  database: 'friendFinder_db'
})
