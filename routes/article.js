const router = require('koa-router')()

const AtricleController = require("../controllers/article");

router.post('/', AtricleController.create);

// 列表
router.get('/',AtricleController.getList)

router.delete('/:id',AtricleController.delete)

module.exports = router; 