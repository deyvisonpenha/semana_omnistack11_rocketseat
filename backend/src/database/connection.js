const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.production); // estava com development

module.exports = connection;