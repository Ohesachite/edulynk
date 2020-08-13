// Import path module
const path = require('path')

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, "db/edudb.sql")

// Create connection to SQLite database
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
})

// Create a table in the database called "logins"
knex.schema
  // Make sure no "login" table exists
  // before trying to create new
  .hasTable("logins")
    .then((exists) => {
      if (!exists) {
        // If no "logins" table exists
        // create new, with "id", "author", "title",
        // "pubDate" and "rating" columns
        // and use "id" as a primary identification
        // and increment "id" with every new record (book)
        return knex.schema.createTable('logins', (table)  => {
          table.increments('id').primary()
          table.string('username')
          table.string('password')
        })
        .then(() => {
          // Log success message
          console.log('Table \'Logins\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })

// Just for debugging purposes:
// Log all data in "logins" table
knex.select('*').from('logins')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))

// Export the database
module.exports = knex
