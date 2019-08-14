const BookService = require("../service/book");

class BookController {
    static async add(ctx) {
        let req = ctx.request.body;
        if (req.title && req.author && req.content && req.parentId && req.img && req.status) {
            try {
                const ret = await BookService.addBook(req);
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
        const params = ctx.request.query;
        try {
            let data = await BookService.getList(params);
            ctx.response.status = 200;
            return ctx.body = {
                code: '0',
                message: "成功",
                data: data
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
    static async getDetail(ctx) {
        let id = ctx.params.id;
        const query = await BookService.getBook(id);
        if (!query) {
            ctx.response.status = 200;
            ctx.body = {
                code: '-1',
                message: "id不存在"
            }
        } else {
            ctx.response.status = 200;
            ctx.body = {
                code: '0',
                message: "成功",
                data: query
            }
        }
    }
    static async delete(ctx) {
        let id = ctx.params.id;
        if (id) {
            try {
                const query = await BookService.getBook(id);
                if (!query) {
                    ctx.response.status = 200;
                    ctx.body = {
                        code: '-1',
                        message: "id不存在"
                    }
                } else {
                    const ret = await BookService.delete(id);
                    ctx.response.status = 200;
                    ctx.body = {
                        code: '0',
                        message: "成功"
                    }
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
    // 根据书名获取书列表
    static async getListByName(ctx) {
        const title = ctx.request.query.title;
        // try {
            let data = await BookService.getListByName(title);
            ctx.response.status = 200;
            return ctx.body = {
                code: '0',
                message: "成功",
                data: {
                    list: data
                }
            }
        // } catch (error) {
        //     ctx.response.status = 200;
        //     ctx.body = {
        //         code: '-1',
        //         message: "失败",
        //         data: error
        //     }
        // }
    }
}
module.exports = BookController;