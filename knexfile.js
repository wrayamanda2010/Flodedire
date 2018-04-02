module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/Flodedire'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
