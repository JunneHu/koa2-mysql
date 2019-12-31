const db = require('../config/db')         // 引入配置文件
const Sequelize = db.sequelize;
const Page = Sequelize.import("../model/page.js"); 
Page.sync({ force: false });    // 自动创建表 (加force:true, 会先删掉表后再建表)

class PageService {
    /*
    * 新增
    */
    static async addPage(data) {
        return await Page.create(data)
    }

    /*
    *  查询
    */
    static async getPage(id) {
        return await Page.findOne({
            where: { id }
        })
    }

    /*
    *  查询列表
    */
    static async getList(data) {
        if (data.pageIndex && data.pageSize) {
            const { pageIndex, pageSize } = data;
            const list = await Page.findAndCountAll({
                where: data.site && {
                    site: data.site
                },
                limit: parseInt(pageSize),
                offset: parseInt(pageIndex - 1) * parseInt(pageSize),
                order: [
                    ['updatedAt', 'ASC']
                ]
            });
            return {
                list: list.rows,
                pageIndex: parseInt(pageIndex),
                pageSize: 10,
                total: list.count,
                totalPage: Math.ceil(list.count / pageSize),
            };
        } else {
            const list = await Page.findAll({
                where: data.site && {
                    site: data.site
                },
                order: [
                    ['updatedAt', 'ASC']
                ]
            });
            return {
                list
            };
        }
    }
    /*
        *  删除
    */
    static async delete(id) {
        return await Page.destroy({
            where: { id }
        })
    }
}

module.exports = PageService;