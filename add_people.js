const knex = require('./knex_connect');
let text = process.argv.slice(2);

/*Sets Values*/
let values = {
  first_name: text[0],
  last_name: text[1],
  birthdate: text[2]
};

/*Inserts new values to database*/
knex('famous_people').insert(values)
  .then(() => {
    console.log('Inserted data');
  })
  .catch((err) => {
    console.error(err);
  })
  .then(() =>{
    knex.destroy();
  });