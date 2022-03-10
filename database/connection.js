var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'http://localhost:3000',
      user : 'root',
      password : 'g36segopro',
      database : 'apiusers'
    }
  });

module.exports = knex