const db = require('../config/db')         // 引入配置文件
const Sequelize = db.sequelize;
const Comment = Sequelize.import("../model/comment.js");
Comment.sync({ force: false });    // 自动创建表 (加force:true, 会先删掉表后再建表)

class CommentService {
    /*
    * 新增
    */
    static async addComment(data) {
        return await Comment.create(data)
    }

    /*
    *  查询单条
    */
    static async getComment(id) {
        return await Comment.findOne({
            where: { id }
        })
    }
    /*
    *  查询列表
    */
    static async getList(data) {
        if (data) {
            const { pageIndex, pageSize } = data;
            const list = await Comment.findAndCountAll({
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
            const list = await Comment.findAll({
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
        return await Comment.destroy({
            where: { id }
        })
    }
}

module.exports = CommentService;