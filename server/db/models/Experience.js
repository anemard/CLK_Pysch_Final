const Sequelize = require('sequelize')
const db = require('../db')

const Experience = db.define('experience', {
  paragraph: {
    type: Sequelize.STRING(1000),
    allowNull: false
  }
})

module.exports = Experience