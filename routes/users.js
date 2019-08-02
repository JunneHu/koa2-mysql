const router = require('koa-router')()
const userController = require('../controllers/user')

//用户注册
router.post('/regist',userController.create)

//密码登陆
router.post('/login',userController.login)

//获取用户信息
router.get('/getUserInfo',userController.getUserInfo)

router.get('/',userController.getUserList)

router.delete('/:id',userController.delete)

router.put('/',userController.update)

module.exports = router;
