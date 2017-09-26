const knex = require('./knex_connect');
let text = process.argv.slice(2);

/*ast name and date of a famous person as three command line arguments and uses Knex to perform an insert.*/

let values = {first_name: text[0], last_name: text[1], birthdate: text[2]};


knex('famous_people').insert(values).return({inserted: true}).then((data) => {
    console.log('Inserted data');
    knex.destroy();
  });

