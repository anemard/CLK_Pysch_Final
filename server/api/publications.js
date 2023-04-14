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