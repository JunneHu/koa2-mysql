const router = require('koa-router')()
const usersBookController = require('../controllers/usersBook')

// 
router.post('/', usersBookController.add)

router.get('/', usersBookController.getList)

router.delete('/', usersBookController.delete)

module.exports = router;