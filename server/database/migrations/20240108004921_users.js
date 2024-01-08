/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('users', tbl => {
    tbl.increments(''),
    tbl.string('auth0Id'),
    tbl.string('email'),
    tbl.string('displayName'),
    tbl.integer('chips'),
    tbl.integer('gamesWon'),
    tbl.integer('totalChipsWon')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('users')
};
