exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .string("VIN")
      .notNullable()
      .index();
    tbl.string("Make").notNullable();
    tbl.string("Model").notNullable();
    tbl.integer("Mileage").notNullable();
    tbl.boolean("Automatic").defaultTo(true);
    tbl.string("Title Status");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
