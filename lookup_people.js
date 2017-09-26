
const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});
let lookup = process.argv.slice(2);

const query = {
  name: 'fetch user',
  text: 'SELECT id, first_name, last_name, birthdate FROM famous_people WHERE last_name = $1::text;',
  values: lookup
}

/*node lookup_people.js Lincoln
Searching ...
Found 1 person(s) by the name 'Lincoln':
- 1: Abraham Lincoln, born '1809-02-12'*/

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query(query, (err, res) => {
    console.log('Searching...');
    if (err) {
      return console.error("error running query", err);
    }
    console.log('Found ' + res.rows.length + ' person(s) by the name ' + lookup + ':')
    console.log(res.rows[0].id + ': ' + res.rows[0].first_name + ' ' + res.rows[0].last_name + ', born "' + res.rows[0].birthdate + '"'); //output: 1
    client.end();
  });
});
