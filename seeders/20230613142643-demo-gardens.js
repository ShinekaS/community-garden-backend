'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Gardens',[
      { name:'Urban Fresh Community Garden LLC', streetAddress:'1211 Joseph E. Boone Blvd',city:'atlanta',state:'Georgia',availablePlots:3,phone:'404-901-9173',createdAt: new Date(),
      updatedAt: new Date(),},
      { name:'West End Community Urban Garden', streetAddress:'1385 Sharon St. NW',city:'atlanta',state:'Georgia',availablePlots:6,phone:'678-933-1087',createdAt: new Date(),
      updatedAt: new Date(),},
      { name:'Georgia Tech Community Garden', streetAddress:'759 Ferst Dr. NW',city:'atlanta',state:'Georgia',availablePlots:0,phone:'',createdAt: new Date(),
      updatedAt: new Date(),},
      { name:'Lawrenceville Community Garden', streetAddress:'Rhodes Jordan Park Pavillion',city:'lawrenceville',state:'Georgia',availablePlots:8,phone:'770-822-8869',createdAt: new Date(),
      updatedAt: new Date(),}
    ])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Gardens', null, {})
  }
};
