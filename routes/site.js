const router = require('koa-router')()
const siteController = require('../controllers/site')
// 查询
router.get('/', siteController.getList)
// 新增
router.post('/', siteController.add)

module.exports = router;