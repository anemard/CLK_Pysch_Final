//this is the access point for all things database related!

const db = require('./db')

const About = require('./models/About');
const Experience = require('./models/Experience');
const Publication = require('./models/Publication');
const Service = require('./models/Service');
const Insurance = require('./models/Insurance');

module.exports = {
  db,
  models: {
    About,
    Experience,
    Publication,
    Service,
    Insurance
  },
}
