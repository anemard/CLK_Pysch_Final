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