const knex = require('./knex_connect');
let values = process.argv.slice(2).toString();
knex('famous_people').select()
  .where('last_name', '=', values)
  .orWhere('first_name', '=', values)
  .then((list) => {
    console.log('Searching...');
    print(list);

    return knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    return knex.destroy();
  });

let print = (list) => {
  console.log('Found ' + list.length + ' person(s) by the name ' + values + ':')
  for(let person of list){
    console.log(person.id + ': ' +
                person.first_name + ' ' +
                person.last_name + ', born "' +
                person.birthdate.toISOString().substr(0, 10) + '"');
  }
}
