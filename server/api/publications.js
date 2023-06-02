const router = require('express').Router()
const { models: { Publication }} = require('../db')
module.exports = router

//Route to retreive all products
router.get('/', async (req, res, next) => {
  try {
    const publications = await Publication.findAll()
    res.json(publications)
  } catch (err) {
    next(err)
  }
});


//Route to retreive a product based upon the product's Id
router.get('/:id', async (req, res,next) => {
  const {id} = req.params;
  try {
     const pubById = await Publication.findByPk(id);
     res.send(pubById)
  } catch (err) {
    next(err)
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newPub = await Publication.create(req.body)
    res.json(newPub)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const publication = await Publication.findByPk(req.params.id)
    await publication.destroy()
    res.send(publication)
  }
  catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const item = await Publication.findByPk(req.params.id)
    res.send(await item.update(req.body))
  } catch (err) {
    next(err)
  }
})