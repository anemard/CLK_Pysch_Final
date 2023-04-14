const Sequelize = require('sequelize')
const db = require('../db')

const About = db.define('about', {
  paragraph: {
    type: Sequelize.STRING(1000),
    allowNull: false
  }
})

module.exports = About