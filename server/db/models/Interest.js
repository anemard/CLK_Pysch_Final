const Sequelize = require('sequelize')
const db = require('../db')

const Interest = db.define('interests', {
  item: {
    type: Sequelize.STRING(1000),
    allowNull: false
  }
})

module.exports = Interest