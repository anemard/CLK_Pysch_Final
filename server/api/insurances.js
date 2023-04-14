const router = require('express').Router()
const { models: { Insurance }} = require('../db')
module.exports = router

//Route to retreive all products
router.get('/', async (req, res, next) => {
  try {
    const insurances = await Insurance.findAll()
    res.json(insurances)
  } catch (err) {
    next(err)
  }
});


//Route to retreive a product based upon the product's Id
router.get('/:id', async (req, res,next) => {
  const {id} = req.params;
  try {
     const insuranceById = await Insurance.findByPk(id);
     res.send(insuranceById)
  } catch (err) {
    next(err)
  }
});