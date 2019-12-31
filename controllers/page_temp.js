const PageTempService = require("../service/page_temp");
const tempModalService = require("../service/tempModal");
class PageTempController {
    static async add(ctx) {
        let req = ctx.request.body;
        if (req.pageId && req.tempId) {
            try {
                const ret = await PageTempService.addPageTemp(req);
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
            let data = await PageTempService.getList(params);
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
    static async getInfo(ctx) {
        const params = ctx.request.query;
        try {
            let data = await PageTempService.getList(params);
            let arr = []
            for (const v of data.list) {
                console.log(v,'[[[[')
                let info = await tempModalService.getList({ tempId: v.tempId, pageId: v.pageId, pageTempId: v.id });
                arr.push({
                    tempId: v.tempId,
                    pageId: v.pageId,
                    id: v.id,
                    sort: v.sort,
                    active: v.active,
                    height:v.height,
                    modalList: info.list
                })
            }
            ctx.response.status = 200;
            return ctx.body = {
                code: '0',
                message: "成功",
                data: {
                    list: arr
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
        let id = ctx.params.id;
        if (id) {
            try {
                const query = await PageTempService.getPageTemp(id);
                if (!query) {
                    ctx.response.status = 200;
                    ctx.body = {
                        code: '-1',
                        message: "id不存在"
                    }
                } else {
                    const ret = await PageTempService.delete(id);
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
    static async update(ctx) {
        let req = ctx.request.body;
        if (req.list) {
            try {
                for (let [index, item] of new Map(req.list.map((item, i) => [i, item]))) {
                    await PageTempService.update(item,index);
                }
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
        } else if (req.id) {
            try {
                await PageTempService.update(req);
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
module.exports = PageTempController;