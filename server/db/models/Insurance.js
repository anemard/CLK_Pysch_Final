const Sequelize = require('sequelize')
const db = require('../db')

const Insurance = db.define('insurance', {
  provider: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  }
})

module.exports = Insurance