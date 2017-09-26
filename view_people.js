const knex = require('./knex_connect');
let values = process.argv.slice(2).toString();
knex('famous_people').select()
  .where('last_name', '=', values)
  .orWhere('first_name', '=', values)
  .then((list) => {
    print(list);

    return knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    return knex.destroy();
  });

let print = (list) => {
  let id = list[0].id;
  let firstName = list[0].first_name;
  let lastName = list[0].last_name;
  let date = list[0].birthdate.toISOString().substr(0, 10);
  console.log(id + ': ' + firstName + ' ' + lastName + ', born "' + date + '"');
}