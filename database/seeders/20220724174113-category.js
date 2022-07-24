'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const categoryA = [
      {
        name: "Hobi",
       
      },
    ];
    const categoryB = [
      {
        name: "Kendaraan",
        
      },
    ];
    const categoryC = [
      {
        name: "Baju",
    
      },
    ];
    const categoryD = [
      {
        name: "Elektronik",
      },
    ];
    const categoryE = [
      {
        name: "Kesehatan",
      },
    ];

    await queryInterface.bulkInsert("Categories", categoryA, {});
    await queryInterface.bulkInsert("Categories", categoryB, {});
    await queryInterface.bulkInsert("Categories", categoryC, {});
    await queryInterface.bulkInsert("Categories", categoryD, {});
    await queryInterface.bulkInsert("Categories", categoryE, {});
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
