const Sequelize = require('sequelize')
const db = require('../db')

const Insurance = db.define('insurance', {
  paragraph: {
    type: Sequelize.STRING(1000),
    allowNull: false
  }
})

module.exports = Insurance