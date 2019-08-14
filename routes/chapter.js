const router = require('koa-router')()
const chapterController = require('../controllers/chapter')

// 
router.post('/', chapterController.add)

router.get('/', chapterController.getList)

router.get('/:bid', chapterController.getListByBookId)   // 通过所属书查询章节


router.delete('/:id', chapterController.delete)

module.exports = router;