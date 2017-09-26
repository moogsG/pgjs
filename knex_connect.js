const settings = require("./settings"); // settings.json

module.exports = require('knex')({
  client: 'pg',
  connection: {
    host: settings.host,
    user: settings.user,
    password: settings.password,
    database: settings.database,
    port: settings.port,
    ssl: settings.ssl
  }
});