var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'SELECT * FROM messages';
      db.query(queryString, function(err, results) {
        if (err) {
          throw err;
        } else {
          callback(err, results);
        }
      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      var queryString = `INSERT INTO messages (user, text, roomname) VALUES (${message.username}, ${message.message}, ${message.roomname})`;
      db.query(queryString, function(err, results) {
        if (err) {
          throw err;
        } else {
          callback(err, results);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = 'SELECT * FROM users';
      db.query(queryString, function(err, results) {
        if (err) {
          throw err;
        } else {
          callback(err, results);
        }
      });
    },
    post: function (user, callback) {
      var queryString = `INSERT INTO users (username) VALUES (${user.username})`;
      db.query(queryString, function(err, results) {
        if (err) {
          throw err;
        } else {
          callback(err, results);
        }
      });
    }
  }
};

