'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
      async up(queryInterface, Sequelize) {

            await queryInterface.bulkInsert('Forums',

                  [
                        {
                              article: "Beginner's Guide to Container Gardening: Growing Plants in Small Spaces",
                              content: "Limited space? No problem! This article provides a comprehensive guide to container gardening, perfect for beginners. Discover the best plants for containers, essential tips for soil selection and watering, and creative ideas for arranging your potted garden. Start growing your own lush oasis, even in the smallest of spaces.",
                              comment: "this looks cool",
                              createdAt: new Date(),
                              updatedAt: new Date()
                        },
                        {
                              article: "The Art of Pruning: Tips and Techniques for a Well-Manicured Garden",
                              content: "Pruning is a vital skill for any gardener, and this article equips you with the knowledge you need to master this art. Learn the purpose and benefits of pruning, different pruning techniques for trees and shrubs, and the best time of year to prune various plants. Transform your garden into a beautifully shaped and healthy paradise with expert pruning techniques. ",
                              comment: "I will definetly give this a try",
                              createdAt: new Date(),
                              updatedAt: new Date()
                        },
                        {
                              article: "Creating a Butterfly Garden: Plants and Practices to Attract Beautiful Butterflies",
                              content: "Transform your garden into a mesmerizing haven for butterflies with this informative article. Discover the best plants to attract butterflies, the importance of providing food and water sources, and tips for creating a butterfly-friendly environment. Bring vibrant colors and delicate fluttering wings to your garden and witness the beauty of these enchanting creatures up close. ",
                              comment: "Wow just what I was looking for",
                              createdAt: new Date(),
                              updatedAt: new Date()
                        },
                        {
                              article: "Organic Gardening: Tips for Growing Healthy, Chemical-Free Plants",
                              content: "Embrace organic gardening and nurture a healthy and sustainable garden with these essential tips. Learn about natural pest control methods, composting techniques, and organic fertilizers to maintain the well-being of your plants. Create a chemical-free oasis that is not only beautiful but also safe for your family and the environment. ",
                              comment: "Chemical free is a game changer, did numbers for my health and well being",
                              createdAt: new Date(),
                              updatedAt: new Date()
                        },
                        {
                              article: "The Benefits of Companion Planting: Maximizing Garden Harmony",
                              content: "Companion planting is a smart strategy to enhance your garden's productivity and health. This article explores the concept of companion planting, providing a list of beneficial plant combinations and plant pairings to avoid. Discover how certain plants can repel pests, attract pollinators, and improve soil fertility when grown together. Harness the power of companion planting and unlock the full potential of your garden. ",
                              comment: "Nothing helped me and my partner bond better than gardening together",
                              createdAt: new Date(),
                              updatedAt: new Date()
                        },
                        {
                              article: "Creating a Sensory Garden: Engaging All Five Senses in Your Outdoor Space",
                              content: "Dive into the world of sensory gardening and create a delightful experience for your senses. This article offers ideas for incorporating scented flowers, contentured foliage, soothing sounds, vibrant colors, and edible plants into your garden. Immerse yourself in the beauty and serenity of a garden that engages all five senses, providing a truly enchanting outdoor retreat. ",
                              comment: "This is facts",
                              createdAt: new Date(),
                              updatedAt: new Date()
                        },
                        {
                              article: "The Joy of Herb Gardening: How to Grow a Flavorful and Fragrant Herb Garden",
                              content: "Unlock the flavors and scents of fresh herbs with your very own herb garden. This article guides you through the process of growing, harvesting, and preserving a variety of culinary and aromatic herbs. Discover essential tips for herb selection, planting techniques, and creative ways to incorporate herbs into your everyday cooking. Elevate your dishes with the delightful flavors and fragrances of homegrown herbs. ",
                              comment: "Herbs are a game changer",
                              createdAt: new Date(),
                              updatedAt: new Date()
                        },
                        {
                              article: "Xeriscaping: Creating a Beautiful Low-Water Garden",
                              content: "Conserve water and create a stunning landscape with xeriscaping, a water-efficient gardening approach. This article introduces the principles of xeriscaping, such as choosing drought-tolerant plants, optimizing irrigation, and using mulch. Learn how to design a visually appealing garden that thrives in arid conditions, while reducing water consumption and maintenance requirements. Embrace xeriscaping and enjoy a beautiful garden while being mindful of water conservation",
                              comment: "I dare you to try and pronunce that",
                              createdAt: new Date(),
                              updatedAt: new Date()
                        },
                  ])
      },

      async down(queryInterface, Sequelize) {
            await queryInterface.bulkDelete('Forums', null, {});

            /**
             * Add commands to revert seed here.
             *
             * Example:
             * await queryInterface.bulkDelete('People', null, {});
             */
      }
};
