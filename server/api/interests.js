const router = require('express').Router()
const { models: { Interest }} = require('../db')
module.exports = router

//Route to retreive all products
router.get('/', async (req, res, next) => {
  try {
    const interests = await Interest.findAll()
    res.json(interests)
  } catch (err) {
    next(err)
  }
});


//Route to retreive a product based upon the product's Id
router.get('/:id', async (req, res,next) => {
  const {id} = req.params;
  try {
     const interestById = await Interest.findByPk(id);
     res.send(interestById)
  } catch (err) {
    next(err)
  }
});