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

router.post('/', async (req, res, next) => {
  try {
    const newInsurance = await Insurance.create(req.body)
    res.json(newInsurance)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const insurance = await Insurance.findByPk(req.params.id)
    await insurance.destroy()
    res.send(insurance)
  }
  catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const paragraph = await Insurance.findByPk(req.params.id)
    res.send(await paragraph.update(req.body))
  } catch (err) {
    next(err)
  }
})