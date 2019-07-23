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

connection.connect(function (err) {
  if (err) throw err;
  // eslint-disable-next-line
  console.log("connected as id " + connection.threadId + "\n");
});


function Log2SQL(data, payload) {
  const qstring = `
  INSERT INTO convMessages 
  (InputMessageType, 
  InputMessageContent,
  ResponseType,
  ResponseIntents,
  ResponseResults,
  Confidence) VALUES (?,?,?,?,?,?);`;

  connection.query({
    sql: qstring,
    values: [
      payload.input.message_type,
      payload.input.text,
      data.output.generic[0].response_type,
      (data.output.intents.length > 0) ? data.output.intents[0].intent : null,
      data.output.generic[0].text,
      (data.output.intents.length > 0) ? data.output.intents[0].confidence : null 
    ]
  },
    function (err, res) {
      if (err) {
        console.log(err);
      }

    });
};

module.exports = {
  Log2SQL: Log2SQL
}