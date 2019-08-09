const router = require('koa-router')()
const chapterController = require('../controllers/chapter')

// 
router.post('/', chapterController.add)

router.get('/', chapterController.getList)

router.delete('/:id', chapterController.delete)

module.exports = router;