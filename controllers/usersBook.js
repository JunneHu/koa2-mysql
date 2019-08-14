const UsersBookService = require("../service/usersBook");
const BookService = require("../service/book");

class UsersBookController {
    static async add(ctx) {
        let req = ctx.request.body;
        if (req.mobileNo && req.bookId) {
            try {
                const ret = await UsersBookService.add(req);
                ctx.response.status = 200;
                ctx.body = {
                    code: '0',
                    message: "成功"
                }
            } catch (err) {
                ctx.response.status = 200;
                ctx.body = {
                    code: '-1',
                    message: "失败",
                    data: err
                }
            }
        } else {
            ctx.response.status = 200;
            ctx.body = {
                code: '-2',
                message: "参数不全"
            }
        }
    }
    static async getList(ctx) {
        let mobileNo = ctx.request.query.mobileNo;
        try {
            let ret = await UsersBookService.getList(mobileNo);
            let result = []
            for (var i = 0; i < ret.list.length; i++) {
                let query = await BookService.getBook(ret.list[i].bookId);
                result.push(
                    query
                )
            }
            ctx.response.status = 200;
            return ctx.body = {
                code: '0',
                message: "成功",
                data: {
                    list: result
                }
            }
        } catch (error) {
            ctx.response.status = 200;
            ctx.body = {
                code: '-1',
                message: "失败",
                data: error
            }
        }
    }
    static async delete(ctx) {
        let params = ctx.params;
        if (params) {
            try {
                const ret = await UsersBookService.delete(params);
                ctx.response.status = 200;
                ctx.body = {
                    code: '0',
                    message: "成功"
                }
            } catch (err) {
                ctx.response.status = 200;
                ctx.body = {
                    code: '-1',
                    message: "失败",
                    data: err
                }
            }
        } else {
            ctx.response.status = 200;
            ctx.body = {
                code: '-2',
                message: "参数不全"
            }
        }
    }
}
module.exports = UsersBookController;