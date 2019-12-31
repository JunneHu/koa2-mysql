const router = require('koa-router')()
const tempController = require('../controllers/temp')
// 查询
router.get('/', tempController.getList)
// 新增
router.post('/', tempController.add)

module.exports = router;
