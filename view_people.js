const knex = require('./knex_connect');
let values = process.argv.slice(2).toString();

/*Calls Knex select and where
*Sends matching value to print funtion
*/
knex('famous_people').select()
  .where('last_name', '=', values)
  .orWhere('first_name', '=', values)
  .then((list) => {
    console.log('Searching...');
    print(list);
  })
  .catch((err) => {
    console.error(err);
  })
  .then(() =>{
    knex.destroy();
  });

/*Prints results
*/
let print = (list) => {
  console.log(`Found ${list.length} person(s) by the name ${values}:`)
  for (let person of list) {
    console.log(`${person.id}: ${person.first_name} ${person.last_name}, born "${person.birthdate.toISOString().substr(0, 10)}"`);
  }
}