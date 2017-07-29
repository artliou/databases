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
          response.writeHead(statusCode, headers);
          response.end('Server Error - Data Not Received');
        } else {
          statusCode = 200;
          response.writeHead(statusCode, headers);
          response.end(JSON.stringify(data));
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      
      var message = {
        json: req.json
      };
      
      models.messages.post(message, function(err, data) {
        if (err) {
          statusCode = 404;
          response.writeHead(statusCode, headers);
          response.end('Server Error - Data Not Received');
        } else {      
          statusCode = 201;
          response.writeHead(statusCode, headers);
          response.end('Posted!');
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

