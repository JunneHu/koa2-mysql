const router = require('koa-router')()
const pageController = require('../controllers/page')
// 查询
router.get('/', pageController.getList)
// 新增
router.post('/', pageController.add)

router.get('/:id', pageController.getDetail)

module.exports = router; 