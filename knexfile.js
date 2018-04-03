// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port: '5433',
      user : 'awray',
      password : 'doot',
      database : 'flodedire'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
