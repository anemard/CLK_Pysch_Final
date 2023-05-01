const router = require('express').Router()
const { models: { Admin }} = require('../db')
module.exports = router

//Route to retreive all products
router.get('/', async (req, res, next) => {
  try {
    const admin = await Admin.findAll()
    res.json(admin)
  } catch (err) {
    next(err)
  }
});