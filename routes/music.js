const router = require('koa-router')()
const musicController = require('../controllers/music')

// 
router.post('/', musicController.add)

router.get('/', musicController.getList)
router.get('/detail/:id', musicController.getDetail)

router.delete('/:id', musicController.delete)

module.exports = router;