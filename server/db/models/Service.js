const Sequelize = require('sequelize')
const db = require('../db')

const Service = db.define('service', {
  paragraph: {
    type: Sequelize.STRING(1000),
    allowNull: false
  }
})

module.exports = Service