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


router.post('/', async (req, res, next) => {
  try {
    const newExp = await Experience.create(req.body)
    res.json(newExp)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const exp = await Experience.findByPk(req.params.id)
    await exp.destroy()
    res.send(exp)
  }
  catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const paragraph = await Experience.findByPk(req.params.id)
    res.send(await paragraph.update(req.body))
  } catch (err) {
    next(err)
  }
})