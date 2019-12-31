const router = require('koa-router')()
const tempModalController = require('../controllers/tempModal')
// 查询
router.get('/', tempModalController.getList)
// 新增
router.post('/', tempModalController.add)

module.exports = router;