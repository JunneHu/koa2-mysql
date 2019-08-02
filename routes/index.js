const router = require('koa-router')()

const users = require('./users')
const article = require('./article')
const category = require('./category')
const goods = require('./goods')
const order = require('./order')
const banner = require('./banner')
const video = require('./video')
const comment = require('./comment')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: '加载成功'
  })
})

router.prefix('/api')

router.use('/user',users.routes(), users.allowedMethods())
router.use('/article',article.routes(), article.allowedMethods())
router.use('/category',category.routes(), category.allowedMethods())
router.use('/goods',goods.routes(), goods.allowedMethods())
router.use('/order',order.routes(), order.allowedMethods())
router.use('/banner',banner.routes(), banner.allowedMethods())
router.use('/video',video.routes(), video.allowedMethods())
router.use('/comment',comment.routes(), comment.allowedMethods())

module.exports = router
