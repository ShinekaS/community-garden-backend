'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Articles',
      [
        {
          title: "Indoor Plants",
          image: "https://ibb.co/5cWYymL",
          link: "'https://kealakai.byuh.edu/indoor-plants-boost-your-homes-air-quality-lowers-stress-say-experts-and-improves-mood','https://www.ambius.com/blog/the-ultimate-guide-to-indoor-plants/','https://bloomboxclub.com/blogs/news/interesting-facts-about-indoor-plants-you-need-to-know','https://www.goodhousekeeping.com/home/gardening/advice/g1285/hard-to-kill-plants/'",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Outdoor Plants",
          image: "https://ibb.co/CBDyHSh",
          link: "'https://www.realsimple.com/home-organizing/gardening/outdoor/impossible-to-kill-outdoor-plants','https://www.bobvila.com/articles/watering-plants/','https://www.masterclass.com/articles/how-to-keep-plants-alive','https://www.almanac.com/soil-preparation-how-do-you-prepare-garden-soil-planting'",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Year Round Plants",
          image: "https://i.ibb.co/rKjxfv3/images.jpg",
          link: "'https://www.finegardening.com/project-guides/container-gardening/10-plants-for-year-round-containers','https://www.nytimes.com/2021/02/03/realestate/the-year-round-garden.html','https://www.realsimple.com/home-organizing/gardening/outdoor/garden-that-blooms-year-round','https://savvygardening.com/new-plants/'",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Seasonal Plants",
          image: "https://i.ibb.co/1dGDhcF/flowers-and-seasons.jpg",
          link: "'https://www.planteriagroup.com/blog/importance-seasonal-flowers/','https://www.sciencedirect.com/science/article/pii/S0960982219315143','https://bio.libretexts.org/Bookshelves/Botany/Red_Seal_Landscape_Horticulturist_Identify_Plants_and_Plant_Requirements_II_(Nakano)/Part_04_Plants_for_Horticultural_Applications/02.2%3A_Seasonal_Plants','https://deckers-nursery.com/garden-learning-center/the-ultimate-guide-to-seasonal-flowers/'",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
