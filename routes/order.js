const router = require('koa-router')()
const orderController = require('../controllers/order')

// 
router.post('/',orderController.add)

router.get('/',orderController.getList)

router.delete('/:id',orderController.delete)

module.exports = router;