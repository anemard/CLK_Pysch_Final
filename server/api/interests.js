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

router.post('/', async (req, res, next) => {
  try {
    const newInterest = await Interest.create(req.body)
    res.json(newInterest)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const interest = await Interest.findByPk(req.params.id)
    await interest.destroy()
    res.send(interest)
  }
  catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const item = await Interest.findByPk(req.params.id)
    res.send(await item.update(req.body))
  } catch (err) {
    next(err)
  }
})