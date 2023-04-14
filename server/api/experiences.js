const router = require('express').Router()
const { models: { Experience }} = require('../db')
module.exports = router

//Route to retreive all products
router.get('/', async (req, res, next) => {
  try {
    const experiences = await Experience.findAll()
    res.json(experiences)
  } catch (err) {
    next(err)
  }
});


//Route to retreive a product based upon the product's Id
router.get('/:id', async (req, res,next) => {
  const {id} = req.params;
  try {
     const experienceById = await Experience.findByPk(id);
     res.send(experienceById)
  } catch (err) {
    next(err)
  }
});