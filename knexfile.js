// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'cluckr',
      username: 'tamara',
      password: 'tamara',
    }
  },
  migrations: {
    directory: './db/_migrations'
  },
};
