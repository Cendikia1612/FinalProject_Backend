'use strict';
const bcrypt = require("bcrypt");

module.exports = {
  async up (queryInterface, Sequelize) {
    const pass = "password";
    const password = bcrypt.hashSync(pass, 10);
    const timestamp = new Date();

    const sellerA = [
      {
        role: "SELLER",
        name: "SELLER A",
        email: "cendikia1612@gmail.com",
        password,
        city: "Bandung",
        address: "Jl. merdeka",
        phone: "081215842130",
        image:
          "https://res.cloudinary.com/dy0o6o4cl/image/upload/v1658385592/jthb9fsmxl9lgrvhftxr.jpg",
        createdAt: timestamp,
        updatedAt: timestamp,
      },
    ];
    const sellerB = [
      {
        role: "SELLER",
        name: "SELLER B",
        email: "adam@gmail.com",
        password,
        city: "Malang",
        address: "Jl.Mawar ",
        phone: "081576453423",
        image:
          "https://res.cloudinary.com/dy0o6o4cl/image/upload/v1658645590/ow6vub82nzqah2d524hw.jpg",
        createdAt: timestamp,
        updatedAt: timestamp,
      },  
    ];


    const buyerA = [
      {
        role: "BUYER",
        name: "BUYER A",
        email: "buyer1@gmail.com",
        password,
        city: "Bekasi",
        address: "Jl. Melati",
        phone: "62342342321",
        image:
          "https://res.cloudinary.com/dy0o6o4cl/image/upload/v1658646163/oen1hez3y0mkdw7x5erz.jpg",
        createdAt: timestamp,
        updatedAt: timestamp,
      },
    ];

    const buyerB = [
      {
        role: "BUYER",
        name: "BUYER B",
        email: "buyer2@gmail.com",
        password,
        city: "Surabaya",
        address: "Jl. Soekarno",
        phone: "62394999212",
        image:
          "https://res.cloudinary.com/dy0o6o4cl/image/upload/v1658646464/qxqgo6httaxjhb3bepp0.jpg",
        createdAt: timestamp,
        updatedAt: timestamp,
      },
    ];

    await queryInterface.bulkInsert("Users", sellerA, {});
    await queryInterface.bulkInsert("Users", sellerB, {});
    await queryInterface.bulkInsert("Users", buyerA, {});
    await queryInterface.bulkInsert("Users", buyerB, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
