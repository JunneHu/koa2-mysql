const router = require('koa-router')()
const goodsController = require('../controllers/goods')

// 新增商品
router.post('/',goodsController.add)

router.get('/',goodsController.getList)

router.delete('/:id',goodsController.delete)

module.exports = router;