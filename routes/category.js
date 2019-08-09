const router = require('koa-router')()
const categoryController = require('../controllers/category')

router.post('/category',categoryController.addCategory)
router.post('/category1',categoryController.addCategory1)
router.post('/category2',categoryController.addCategory2)


router.get('/category',categoryController.getCategory)
router.get('/category1',categoryController.getCategory1)
router.get('/category2',categoryController.getCategory2)
router.get('/getCategory2ById',categoryController.getCategory2ById)


router.delete('/category/:id',categoryController.deleteCategory)
router.delete('/category1/:id',categoryController.deleteCategory1)
router.delete('/category2/:id',categoryController.deleteCategory2)




module.exports = router;