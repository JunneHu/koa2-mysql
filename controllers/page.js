const PageService = require("../service/page");

class PageController {
    static async add(ctx) {
        let req = ctx.request.body;
        if (req.name && req.link && req.site) {
            try {
                const ret = await PageService.addPage(req);
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
            let data = await PageService.getList(params);
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
        const query = await PageService.getPage(id);
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
                const query = await PageService.getPage(id);
                if (!query) {
                    ctx.response.status = 200;
                    ctx.body = {
                        code: '-1',
                        message: "id不存在"
                    }
                } else {
                    const ret = await PageService.delete(id);
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
}
module.exports = PageController;