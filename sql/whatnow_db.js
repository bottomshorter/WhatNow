var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: 'example123!',
  database: 'whatnow_db'
});

connection.connect(function(err) {
  if (err) throw err;
  // eslint-disable-next-line
  console.log("connected as id " + connection.threadId + "\n");
});

function messageLog(){
  console.log("Inserting into SQL...\n");
  var query = connection.query(
    "INSERT INTO convMessages(ID, InputMessageType, InputMessageContent, ResponseType, ResponseHeader, ResponseResults, ResponseIntent, Confidence) VALUES ?",

  );
};