
const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.host,
  port     : settings.port,
  ssl      : settings.ssl
});


let lookup = process.argv.slice(2);

const query = {
  name: 'fetch user',
  text: 'SELECT id, first_name, last_name, birthdate FROM famous_people WHERE last_name = $1::text;',
  values: lookup
}

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  client.query(query, (err, res) => {
    console.log('Searching...');
    if (err) {
      return console.error("error running query", err);
    }
    print(res.rows);
    client.end();
  });

});


let print = (list) => {
  console.log('Found ' + list.length + ' person(s) by the name ' + query.name + ':')
  for(let person of list){
    console.log(person.id + ': ' +
                person.first_name + ' ' +
                person.last_name + ', born "' +
                person.birthdate.toISOString().substr(0, 10) + '"');
  }
}
