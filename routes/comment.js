const router = require('koa-router')()
const commentController = require('../controllers/comment')

// 新增商品
router.post('/',commentController.add)

router.get('/',commentController.getList)

router.delete('/:id',commentController.delete)

module.exports = router;