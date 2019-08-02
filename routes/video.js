const router = require('koa-router')()
const videoController = require('../controllers/video')

// 
router.post('/', videoController.add)

router.get('/', videoController.getList)

router.delete('/:id', videoController.delete)

module.exports = router;