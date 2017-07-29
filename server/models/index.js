var db = require('./db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'SELECT * FROM messages';
      db.query(queryString, function(err, results) {
        if (err) {
          throw err;
        } else {
          callback(results);
        }
      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      console.log(message, 'Message');
      var queryString = `INSERT INTO messages (user, text, roomname) VALUES (${message.username}, ${message.message}, ${message.roomname})`;
      console.log(queryString, 'STRING');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

