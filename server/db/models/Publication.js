const Sequelize = require('sequelize')
const db = require('../db')

const Publication = db.define('publication', {
  url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  publisher: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

module.exports = Publication