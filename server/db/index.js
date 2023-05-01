//this is the access point for all things database related!

const db = require('./db')

const Admin = require('./models/Admin');
const About = require('./models/About');
const Experience = require('./models/Experience');
const Publication = require('./models/Publication');
const Service = require('./models/Service');
const Insurance = require('./models/Insurance');
const Interest = require('./models/Interest');

module.exports = {
  db,
  models: {
    Admin,
    About,
    Experience,
    Publication,
    Service,
    Insurance,
    Interest
  },
}
