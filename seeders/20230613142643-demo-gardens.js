'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Gardens',[
      { name:'Urban Fresh Community Garden LLC', streetAddress:'1211 Joseph E. Boone Blvd',city:'atlanta',state:'Georgia',availablePlots:3,phone:'404-901-9173',rules:["Respect other gardeners' plots and belongings.",
      "Keep the garden clean and free of litter.",
      "Follow organic and sustainable gardening practices.",
      "Do not use harmful chemicals or pesticides.",
      "Water plants responsibly and conserve water.",
      "Participate in community garden activities and events.",
      "Communicate and collaborate with fellow gardeners.",
      "No unauthorized pets or animals in the garden.",
      "Adhere to the garden's designated operating hours.",
      "Report any maintenance or security concerns to the garden management."],announcements:[ "Join us for the grand opening of our community garden this Saturday at 10 am!",
      "Calling all green thumbs! We are looking for volunteers to help maintain the community garden.",
      "Don't miss our gardening workshop next week on composting techniques. It's free for all community members!"],createdAt: new Date(),
      updatedAt: new Date(),},
      { name:'West End Community Urban Garden', streetAddress:'1385 Sharon St. NW',city:'atlanta',state:'Georgia',availablePlots:6,phone:'678-933-1087',rules:[
        "Maintain your plot regularly and keep it free from weeds.",
        "Share excess produce with other gardeners.",
        "Respect the diversity of plants and avoid removing others' plants.",
        "Refrain from using loud equipment during designated quiet hours.",
        "Attend regular community garden meetings and contribute to decision-making.",
        "Use organic fertilizers and pest control methods.",
        "Observe and learn from fellow gardeners' techniques and experiences.",
        "Contribute to communal garden tasks, such as composting or watering common areas.",
        "Promote a welcoming and inclusive atmosphere for all gardeners.",
        "Educate and engage the local community about the benefits of community gardening."
      ],announcements:["Attention gardeners: Please remember to water your plots regularly, especially during dry spells.",
      "We're excited to announce the addition of a new section in the community garden dedicated to medicinal herbs. Come and explore!",
      "Community Garden Cleanup Day is coming up on Saturday. Let's work together to keep our garden clean and beautiful."],createdAt: new Date(),
      updatedAt: new Date(),},
      { name:'Georgia Tech Community Garden', streetAddress:'759 Ferst Dr. NW',city:'atlanta',state:'Georgia',availablePlots:0,phone:'',rules:[
        "Supervise your children at all times while in the garden.",
        "Teach children about the importance of respecting plants and wildlife.",
        "Encourage children to participate in gardening activities and learn about different plants.",
        "Ensure children use child-friendly garden tools and equipment under adult supervision.",
        "Create a designated play area within the garden to keep children safe.",
        "Promote garden-based learning activities for children, such as nature scavenger hunts or plant identification.",
        "Organize family-friendly events and workshops to engage families with children in gardening.",
        "Establish community guidelines for sharing and rotating child-friendly gardening plots.",
        "Encourage families to take turns in organizing educational activities for children in the garden.",
        "Create a welcoming and inclusive environment for families of diverse backgrounds."
      ],announcements:["Calling all kids! Join us this Sunday for a special children's gardening event. Fun activities and snacks provided.",
      "Attention gardeners: A limited number of raised beds are available. Contact us to reserve yours!",
      "Mark your calendars for our upcoming seed swap event. Share and exchange your favorite plant seeds with fellow gardeners."],createdAt: new Date(),
      updatedAt: new Date(),},
      { name:'Lawrenceville Community Garden', streetAddress:'Rhodes Jordan Park Pavillion',city:'lawrenceville',state:'Georgia',availablePlots:8,phone:'770-822-8869',rules:[
        "Everyone is welcome to participate in the community garden regardless of gardening experience.",
        "Respect each other's cultural backgrounds and traditions when growing and sharing food.",
        "Ensure equitable access to gardening resources and plots, particularly for those with limited resources.",
        "Collaborate with local organizations to provide gardening workshops and educational resources for community members.",
        "Encourage community members to share their gardening knowledge and skills with each other.",
        "Establish a system for sharing and distributing the harvested produce among the participants.",
        "Promote sustainable gardening practices, such as composting and water conservation.",
        "Encourage community members to grow culturally diverse and nutritious crops.",
        "Work together to address challenges related to soil quality, pest control, and plant diseases.",
        "Collaborate with local food banks or organizations to distribute excess produce to those in need.",
        "Create opportunities for community engagement and social connections through garden-related events and activities.",
        "Advocate for policy changes and resources to address the underlying issues contributing to food deserts.",
      ],announcements:["Calling all artists! We are hosting a community garden mural painting event next month. Let your creativity blossom!",
      "Celebrate the harvest season with us at our Fall Harvest Festival. Food, music, and fun for the whole community!",
      "Gardeners, please be mindful of your fellow gardeners' plots and avoid encroaching on their space. Let's respect each other's areas."],createdAt: new Date(),
      updatedAt: new Date(),}
    ])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Gardens', null, {})
  }
};
