exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "testtesttest",
          Make: "Chevy",
          Model: "Camper Special",
          Mileage: "250000",
          Automatic: true
        },
        {
          VIN: "testtesttest",
          Make: "Hyundai",
          Model: "Elantra GT",
          Mileage: "200000",
          Automatic: true
        },
        {
          VIN: "testtesttest",
          Make: "Toyota",
          Model: "Solara",
          Mileage: "240000",
          Automatic: true
        },
        {
          VIN: "testtesttest",
          Make: "Volvo",
          Model: "XC60",
          Mileage: "10000",
          Automatic: true
        }
      ]);
    });
};
