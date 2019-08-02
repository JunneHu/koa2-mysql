const router = require('koa-router')()
const bannerController = require('../controllers/banner')

// 新增
router.post('/',bannerController.add)

// 列表
router.get('/',bannerController.getList)

router.delete('/:id',bannerController.delete)

module.exports = router;