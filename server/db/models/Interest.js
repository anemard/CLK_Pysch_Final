const Sequelize = require('sequelize')
const db = require('../db')

const Interest = db.define('interests', {
  list: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  }
})

module.exports = Interest