var path = require('path');

// const db = require('../server.js')

var friends = require('../data/friends.js');

module.exports = app => {
  // Create
    app.post("/api/friends", function(req, res) {
      console.log(req.body)
    })
  // Read

  // Update

  // Delete
}
