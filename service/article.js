const db = require('../config/db')         // 引入配置文件
const Sequelize = db.sequelize;
const Article = Sequelize.import("../model/article");     // 引入文章数据表模型文件
Article.sync({ force: false });    // 自动创建表 (加force:true, 会先删掉表后再建表)

class AtricleService {
    /*
    * 创建文章模型
    */
    static async createArticle(data) {
        return await Article.create(data)
    }

    /*
    *  查询文章详情
    */
    static async getArticleDetail(id) {
        return await Article.findOne({
            where: { id }
        })
    }

    /*
    *  查询列表
    */
    static async getList(data) {
        if (data) {
            const { pageIndex, pageSize } = data;
            const list = await Article.findAndCountAll({
                limit: parseInt(pageSize),
                offset: parseInt(pageIndex - 1) * parseInt(pageSize),
                order: [
                    ['updatedAt', 'DESC']
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
            const list = await Article.findAll({
                order: [
                    ['updatedAt', 'DESC']
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
        return await Article.destroy({
            where: { id }
        })
    }
}

module.exports = AtricleService;