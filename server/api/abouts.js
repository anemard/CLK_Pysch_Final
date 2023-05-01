const router = require('express').Router()
const { models: { About }} = require('../db')
module.exports = router

//Route to retreive all products
router.get('/', async (req, res, next) => {
  try {
    const abouts = await About.findAll()
    res.json(abouts)
  } catch (err) {
    next(err)
  }
});


//Route to retreive a product based upon the product's Id
router.get('/:id', async (req, res,next) => {
  const {id} = req.params;
  try {
     const aboutById = await About.findByPk(id);
     res.send(aboutById)
  } catch (err) {
    next(err)
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newAbout = await About.create(req.body)
    res.json(newAbout)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const about = await About.findByPk(req.params.id)
    await about.destroy()
    res.send(about)
  }
  catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const paragraph = await About.findByPk(req.params.id)
    res.send(await paragraph.update(req.body))
  } catch (err) {
    next(err)
  }
})