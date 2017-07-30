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
      console.log('hello Im here!!!!!');
      models.messages.get(function(err, data) {
        if (err) {
          console.log('Err', err);
          statusCode = 404;
          res.writeHead(statusCode, headers);
          res.end('Server Error - Data Not Received');
        } else {
          // res.writeHead(statusCode, headers);
          // res.end(JSON.stringify(data));
          // console.log(data);
          // res.status(200).send(data);
          res.json(data);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // console.log(req);
      // console.log(req.body);
      var message = {
        username: req.query.username,
        text: req.query.text,
        roomname: req.query.roomname
      };
      
      models.messages.post(message, function(err, data) {
        if (err) {
          console.log('Err', err);
          statusCode = 404;
          res.writeHead(statusCode, headers);
          res.end('Server Error - Data Not Received');
        } else {      
          statusCode = 201;
          res.writeHead(statusCode, headers);
          res.end('Posted!');
        }
      });
    }, // a function which handles posting a message to the database
    // options: function(req, res) {
    //   headers["Access-Control-Allow-Origin"] = "*";
    //   headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
    //   headers["Access-Control-Allow-Credentials"] = false;
    //   headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    //   headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
    //   headers['access-control-allow-headers'] = 'content-type, accept',
    //   headers['Content-Type'] = 'application/json';
    //   res.writeHead(200, headers);
    //   res.end();
    // }
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
      console.log(Object.keys(req)); 
      console.log(req.query);
      console.log(req.body, 'BODY AND QUERY');
      var user = {
        username: req.body.username
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

