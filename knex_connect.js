const settings = require("./settings"); // settings.json
module.exports = require('knex')(require('./knexfile')['development']);
