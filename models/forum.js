const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', null, null, {
  host: 'localhost',
  dialect: 'postgres'
});

const Forum = sequelize.define('Forum', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  article: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  dislikes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  comments: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: []
  }
}, {
  tableName: 'Forums'
});

module.exports = Forum;
