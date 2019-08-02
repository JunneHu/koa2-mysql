const db = require('../config/db')         // 引入配置文件
const Sequelize = db.sequelize;
const Banner = Sequelize.import("../model/banner.js");
Banner.sync({ force: false });    // 自动创建表 (加force:true, 会先删掉表后再建表)

class BannerService {
    /*
    * 新增
    */
    static async addBanner(data) {
        return await Banner.create(data)
    }

    /*
    *  查询单条
    */
    static async getBanner(id) {
        return await Banner.findOne({
            where: { id }
        })
    }
    /*
    *  查询列表
    */
    static async getList(data) {
        if (data) {
            const { pageIndex, pageSize } = data;
            const list = await Banner.findAndCountAll({
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
            const list = await Banner.findAll({
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
        return await Banner.destroy({
            where: { id }
        })
    }
}

module.exports = BannerService;