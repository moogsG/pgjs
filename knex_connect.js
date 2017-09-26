const settings = require("./settings"); // settings.json

module.exports = require('knex')(require('./knexfile')[process.env.NODE_ENV]);