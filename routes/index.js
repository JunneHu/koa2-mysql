const router = require('koa-router')(),
  cheerio = require('cheerio')
const request = require('superagent')
require('superagent-charset')(request)

const users = require('./users')
const article = require('./article')
const category = require('./category')
const goods = require('./goods')
const order = require('./order')
const banner = require('./banner')
const video = require('./video')
const comment = require('./comment')
const book = require('./book')
const chapter = require('./chapter')
const usersBook = require('./usersBook')

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: '加载成功'
//   })
// })

router.prefix('/api')

router.use('/user', users.routes(), users.allowedMethods())
router.use('/article', article.routes(), article.allowedMethods())
router.use('/category', category.routes(), category.allowedMethods())
router.use('/goods', goods.routes(), goods.allowedMethods())
router.use('/order', order.routes(), order.allowedMethods())
router.use('/banner', banner.routes(), banner.allowedMethods())
router.use('/video', video.routes(), video.allowedMethods())
router.use('/comment', comment.routes(), comment.allowedMethods())
router.use('/book', book.routes(), book.allowedMethods())
router.use('/chapter', chapter.routes(), chapter.allowedMethods())
router.use('/usersBook', usersBook.routes(), usersBook.allowedMethods())


// 模拟爬虫

let arr1, arr2, ban;

router.get('/', async (ctx, next) => {
  let url = 'https://www.xxsy.net/';
  request.get(url)
    .charset('utf-8') //当前页面编码格式
    .buffer(true)
    .end((err, data) => { //页面获取到的数据
      let html = data.text;

      let $ = cheerio.load(html, {
        decodeEntities: false,
        ignoreWhitespace: false,
        xmlMode: false,
        lowerCaseTags: false
      }) //用cheerio解析页面数据

      arr1 = [], arr2 = [], ban = [];

      $(".sidebar .text-list li").each((index, element) => {
        arr1.push({
          type: $(element).find('.classify').text().replace('[', '').replace(']', ''),
          name: $(element).find('a').text(),
        });
      });

      $(".extrabar .text-list li").each((index, element) => {
        arr2.push({
          type: $(element).find('.classify').text().replace('[', '').replace(']', ''),
          name: $(element).find('a').text(),
        });
      });

      $(".roasting .roastingslider li").each((index, element) => {
        ban.push({
          src: $(element).find('a img').attr("src"),
        });
      });

    });
  await ctx.render('index', {
    title: '加载成功',
    data: {
      arr1,
      arr2,
      ban
    },
  })

})



module.exports = router
