const db = require('../config/db')         // 引入配置文件
const Sequelize = db.sequelize;
const Site = Sequelize.import("../model/site.js"); 
Site.sync({ force: false });    // 自动创建表 (加force:true, 会先删掉表后再建表)

class SiteService {
    /*
    * 新增
    */
    static async addSite(data) {
        return await Site.create(data)
    }

    /*
    *  查询
    */
    static async getSite(id) {
        return await Site.findOne({
            where: { id }
        })
    }

    /*
    *  查询列表
    */
    static async getList(data) {
        if (data.pageIndex && data.pageSize) {
            const { pageIndex, pageSize } = data;
            const list = await Site.findAndCountAll({
                where: data.page && {
                    name: data.name
                },
                limit: parseInt(pageSize),
                offset: parseInt(pageIndex - 1) * parseInt(pageSize),
                order: [
                    ['sort', 'ASC']
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
            const list = await Site.findAll({
                where: data.page && {
                    name: data.name
                },
                order: [
                    ['sort', 'ASC']
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
        return await Site.destroy({
            where: { id }
        })
    }
}

module.exports = SiteService;