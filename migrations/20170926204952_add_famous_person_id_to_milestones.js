exports.up = function(knex, Promise) {
    return Promise.all([
  knex.schema.table('milestones', function(table) {
    table.integer('famous_people').unsigned()
    table.foreign('famous_people').references('famous_people.id')
  })
    ])
};

exports.down = function(knex, Promise) {

};