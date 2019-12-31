const router = require('koa-router')()
const chapterController = require('../controllers/chapter')

// 
router.post('/', chapterController.add)

router.get('/', chapterController.getList)

router.delete('/:id', chapterController.delete)

router.post('/read', chapterController.read)

module.exports = router;