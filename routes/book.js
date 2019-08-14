const router = require('koa-router')()
const bookController = require('../controllers/book')

// 
router.post('/', bookController.add)

router.get('/', bookController.getList)

router.get('/detail/:id', bookController.getDetail)

router.delete('/:id', bookController.delete)

router.get('/getListByName', bookController.getListByName)

// 
module.exports = router;