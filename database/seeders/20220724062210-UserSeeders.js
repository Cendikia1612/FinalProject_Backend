'use strict';
const bcrypt = require("bcrypt");

module.exports = {
  async up (queryInterface, Sequelize) {
    const pass = "password";
    const password = bcrypt.hashSync(pass, 10);
    const timestamp = new Date();

    const seller1 = [
      {
        role: "SELLER",
        name: "SELLER 1",
        email: "seller1@gmail.com",
        password,
        city: "Semarang",
        address: "Jl. merdeka",
        phone: "081879742130",
        image:
          "https://res.cloudinary.com/dy0o6o4cl/image/upload/v1658385592/jthb9fsmxl9lgrvhftxr.jpg",
        createdAt: timestamp,
        updatedAt: timestamp,
      },
    ];
    const seller2 = [
      {
        role: "SELLER",
        name: "SELLER 2",
        email: "seller2@gmail.com",
        password,
        city: "Malang",
        address: "Jl.kumbang ",
        phone: "081576453489",
        image:
          "https://res.cloudinary.com/dy0o6o4cl/image/upload/v1658645590/ow6vub82nzqah2d524hw.jpg",
        createdAt: timestamp,
        updatedAt: timestamp,
      },  
    ];


    const buyer1 = [
      {
        role: "BUYER",
        name: "BUYER 1",
        email: "buyer1@gmail.com",
        password,
        city: "Bekasi",
        address: "Jl. cempaka",
        phone: "62342342321",
        image:
          "https://res.cloudinary.com/dy0o6o4cl/image/upload/v1658646163/oen1hez3y0mkdw7x5erz.jpg",
        createdAt: timestamp,
        updatedAt: timestamp,
      },
    ];

    const buyer2 = [
      {
        role: "BUYER",
        name: "BUYER c",
        email: "buyer2@gmail.com",
        password,
        city: "Surabaya",
        address: "Jl. ahmad yamin",
        phone: "62394999212",
        image:
          "https://res.cloudinary.com/dy0o6o4cl/image/upload/v1658646464/qxqgo6httaxjhb3bepp0.jpg",
        createdAt: timestamp,
        updatedAt: timestamp,
      },
    ];

    await queryInterface.bulkInsert("Users", seller1, {});
    await queryInterface.bulkInsert("Users", seller2, {});
    await queryInterface.bulkInsert("Users", buyer1, {});
    await queryInterface.bulkInsert("Users", buyer2, {});
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
