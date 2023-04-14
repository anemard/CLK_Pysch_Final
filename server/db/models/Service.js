const Sequelize = require('sequelize')
const db = require('../db')

const Service = db.define('service', {
  list: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  }
})

module.exports = Service