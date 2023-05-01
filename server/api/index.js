const router = require('express').Router()
module.exports = router

router.use('/admins', require('./admins'))
router.use('/abouts', require('./abouts'))
router.use('/experiences', require('./experiences'))
router.use('/insurances', require('./insurances'))
router.use('/publications', require('./publications'))
router.use('/services', require('./services'))
router.use('/interests', require('./interests'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})