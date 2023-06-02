const router = require('express').Router()
const { models: { Service }} = require('../db')
module.exports = router

//Route to retreive all products
router.get('/', async (req, res, next) => {
  try {
    const services = await Service.findAll()
    res.json(services)
  } catch (err) {
    next(err)
  }
});


//Route to retreive a product based upon the product's Id
router.get('/:id', async (req, res,next) => {
  const {id} = req.params;
  try {
     const serviceById = await Service.findByPk(id);
     res.send(serviceById)
  } catch (err) {
    next(err)
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newService = await Service.create(req.body)
    res.json(newService)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const service = await Service.findByPk(req.params.id)
    await service.destroy()
    res.send(service)
  }
  catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const paragraph = await Service.findByPk(req.params.id)
    res.send(await paragraph.update(req.body))
  } catch (err) {
    next(err)
  }
})