const router = require('koa-router')()
const pageTempController = require('../controllers/page_temp')
// 查询
router.get('/', pageTempController.getList)

router.get('/info', pageTempController.getInfo)

// 新增
router.post('/', pageTempController.add)

router.delete('/:id',pageTempController.delete)

router.put('/',pageTempController.update)

module.exports = router;