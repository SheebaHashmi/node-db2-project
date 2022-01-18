exports.up = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.createTable('cars',table => {
    table.increments().primary()
    table.string('vin').unique().notNullable()
    table.string('make').notNullable()
    table.string('model').notNullable()
    table.integer('mileage').notNullable()
    table.string('title')
    table.string('transmission')
  })
};

exports.down = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.dropTableIfExist('cars')
};
