const router = require('koa-router')()
const bookController = require('../controllers/book')

// 
router.post('/', bookController.add)

router.get('/', bookController.getList)

router.delete('/:id', bookController.delete)

module.exports = router;