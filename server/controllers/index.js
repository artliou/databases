var models = require('../models');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, data) {
        if (err) {
          statusCode = 404;
          res.writeHead(statusCode, headers);
          res.end('Server Error - Data Not Received');
        } else {
          statusCode = 200;
          res.writeHead(statusCode, headers);
          res.end(JSON.stringify(data));
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // console.log(req);
      // console.log(req.body);
      var message = {
        username: req.query.username,
        message: req.query.message,
        roomname: req.query.roomname
      };
      
      models.messages.post(message, function(err, data) {
        if (err) {
          statusCode = 404;
          res.writeHead(statusCode, headers);
          res.end('Server Error - Data Not Received');
        } else {      
          statusCode = 201;
          res.writeHead(statusCode, headers);
          res.end('Posted!');
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, data) {
        if (err) {
          statusCode = 404;
          res.writeHead(statusCode, headers);
          res.end('Server Error - Data Not Received');
        } else {
          statusCode = 200;
          res.writeHead(statusCode, headers);
          res.end(JSON.stringify(data));
        }
      });
    },
    post: function (req, res) {

      var user = {
        username: req.query.username
      };
      
      models.users.post(user, function(err, data) {
        if (err) {
          statusCode = 404;
          res.writeHead(statusCode, headers);
          res.end('Server Error - Data Not Received');
        } else {
          statusCode = 201;
          res.writeHead(statusCode, headers);
          res.end('Posted!');
        }
      });
    }
  }
};

