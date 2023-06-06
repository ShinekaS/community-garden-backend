'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Plant')
  // Spring Fruits
  [
  {
    name: 'Strawberries',
    zone: '4-8',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Lettuce, spinach, thyme',
    harvest: 'Late spring to early summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Blueberries',
    zone: '4-8',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Azaleas, rhododendrons, cranberries',
    harvest: 'Late spring to early summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Blackberries',
    zone: '5-9',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Raspberries, strawberries, marigolds',
    harvest: 'Late spring to early summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Raspberries',
    zone: '4-8',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Blackberries, strawberries, onions',
    harvest: 'Late spring to early summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Peaches',
    zone: '5-8',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Nasturtiums, garlic, chives',
    harvest: 'Late spring to early summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Plums',
    zone: '5-9',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Daffodils, chives, marigolds',
    harvest: 'Late spring to early summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Cherries',
    zone: '4-7',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Daffodils, marigolds, chives',
    harvest: 'Late spring to early summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  
  // Spring Vegetables
  {
    name: 'Lettuce',
    zone: '4-10',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Carrots, radishes, chives',
    harvest: 'Spring',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Spinach',
    zone: '4-9',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Lettuce, carrots, onions',
    harvest: 'Spring',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Kale',
    zone: '3-11',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Beets, onions, chamomile',
    harvest: 'Spring to summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Radishes',
    zone: '2-10',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Lettuce, peas, cucumbers',
    harvest: 'Spring',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Carrots',
    zone: '3-10',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Peas, onions, lettuce',
    harvest: 'Spring to summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Beets',
    zone: '2-10',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Lettuce, onions, garlic',
    harvest: 'Spring to summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Broccoli',
    zone: '3-10',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Lettuce, onions, spinach',
    harvest: 'Spring to summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Cauliflower',
    zone: '3-11',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Lettuce, onions, peas',
    harvest: 'Spring to summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Peas',
    zone: '3-10',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Carrots, radishes, cucumbers',
    harvest: 'Spring',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Onions',
    zone: '3-9',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Carrots, beets, lettuce',
    harvest: 'Spring to summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Garlic',
    zone: '4-9',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Roses, tomatoes, beets',
    harvest: 'Late spring to early summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Potatoes',
    zone: '3-8',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Beans, corn, cabbage',
    harvest: 'Late spring to early summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Asparagus',
    zone: '3-10',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Tomatoes, basil, parsley',
    harvest: 'Late spring to early summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
 
  // Spring Herbs
  {
    name: 'Basil',
    zone: '3-10',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Tomatoes, peppers, oregano',
    harvest: 'Spring to fall',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Cilantro',
    zone: '2-11',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Dill, anise, potatoes',
    harvest: 'Spring to summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Dill',
    zone: '2-11',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Cabbage, cucumbers, lettuce',
    harvest: 'Spring to summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Parsley',
    zone: '3-9',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Tomatoes, peppers, carrots',
    harvest: 'Spring to fall',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Chives',
    zone: '3-10',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Carrots, tomatoes, apples',
    harvest: 'Spring to fall',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Mint',
    zone: '3-11',
    season: 'Spring',
    water: 'Regular watering',
    companion: 'Cabbage, tomatoes, onions',
    harvest: 'Spring to fall',
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // Summer Fruits
  {
    name: 'Watermelon',
    zone: '3-11',
    season: 'Summer',
    water: 'Regular watering',
    companion: 'Corn, radishes, marigolds',
    harvest: 'Summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Cantaloupe',
    zone: '4-11',
    season: 'Summer',
    water: 'Regular watering',
    companion: 'Corn, radishes, nasturtiums',
    harvest: 'Summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Tomatoes',
    zone: '3-10',
    season: 'Summer',
    water: 'Regular watering',
    companion: 'Basil, marigolds, carrots',
    harvest: 'Summer to early fall',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Cucumbers',
    zone: '4-11',
    season: 'Summer',
    water: 'Regular watering',
    companion: 'Corn, beans, radishes',
    harvest: 'Summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Grapes',
    zone: '5-9',
    season: 'Summer',
    water: 'Regular watering',
    companion: 'Basil, roses, marigolds',
    harvest: 'Late summer to early fall',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Figs',
    zone: '8-10',
    season: 'Summer',
    water: 'Regular watering',
    companion: 'Lavender, rosemary, marigolds',
    harvest: 'Late summer to early fall',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  // Add more fruits for Summer

  // Summer Vegetables
  {
    name: 'Tomatoes',
    zone: '3-10',
    season: 'Summer',
    water: 'Regular watering',
    companion: 'Basil, marigolds, carrots',
    harvest: 'Summer to early fall',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Peppers',
    zone: '3-10',
    season: 'Summer',
    water: 'Regular watering',
    companion: 'Basil, onions, tomatoes',
    harvest: 'Summer to early fall',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Eggplant',
    zone: '4-11',
    season: 'Summer',
    water: 'Regular watering',
    companion: 'Basil, marigolds, tomatoes',
    harvest: 'Summer to early fall',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Zucchini',
    zone: '3-11',
    season: 'Summer',
    water: 'Regular watering',
    companion: 'Basil, radishes, nasturtiums',
    harvest: 'Summer to early fall',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Squash',
    zone: '3-11',
    season: 'Summer',
    water: 'Regular watering',
    companion: 'Basil, radishes, nasturtiums',
    harvest: 'Summer to early fall',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Corn',
    zone: '4-10',
    season: 'Summer',
    water: 'Regular watering',
    companion: 'Cucumbers, beans, squash',
    harvest: 'Late summer to early fall',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Okra',
    zone: '6-11',
    season: 'Summer',
    water: 'Regular watering',
    companion: 'Beans, peppers, basil',
    harvest: 'Summer to early fall',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Green Beans',
    zone: '3-10',
    season: 'Summer',
    water: 'Regular watering',
    companion: 'Carrots, corn, cucumbers',
    harvest: 'Summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Sweet Potatoes',
    zone: '8-11',
    season: 'Summer',
    water: 'Regular watering',
    companion: 'Beans, onions, nasturtiums',
    harvest: 'Late summer to fall',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Melons',
    zone: '3-11',
    season: 'Summer',
    water: 'Regular watering',
    companion: 'Corn, beans, radishes',
    harvest: 'Summer to early fall',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  // Add more vegetables for Summer

  // Summer Herbs
  {
    name: 'Rosemary',
    zone: '8-11',
    season: 'Summer',
    water: 'Regular watering',
    companion: 'Cabbage, beans, carrots',
    harvest: 'Year-round',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Thyme',
    zone: '5-11',
    season: 'Summer',
    water: 'Regular watering',
    companion: 'Cabbage, onions, tomatoes',
    harvest: 'Year-round',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Oregano',
    zone: '5-10',
    season: 'Summer',
    water: 'Regular watering',
    companion: 'Eggplant, peppers, tomatoes',
    harvest: 'Year-round',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Sage',
    zone: '5-9',
    season: 'Summer',
    water: 'Regular watering',
    companion: 'Cabbage, carrots, rosemary',
    harvest: 'Year-round',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Lavender',
    zone: '5-9',
    season: 'Summer',
    water: 'Regular watering',
    companion: 'Cabbage, onions, tomatoes',
    harvest: 'Summer',
    createdAt: new Date(),
    updatedAt: new Date()
  },
]
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Plant',null,{});
 
  }

};
