const db = require('../config/db')         // 引入配置文件
const Sequelize = db.sequelize;
const Music = Sequelize.import("../model/music.js");
Music.sync({ force: false });    // 自动创建表 (加force:true, 会先删掉表后再建表)

class MusicService {
    /*
    * 新增商品
    */
    static async addMusic(data) {
        return await Music.create(data)
    }

    /*
    *  查询商品
    */
    static async getMusic(id) {
        return await Music.findOne({
            where: { id }
        })
    }

    /*
    *  查询列表
    */
    static async getList(data) {
        if (data.pageIndex && data.pageSize) {
            const { pageIndex, pageSize } = data;
            const list = await Music.findAndCountAll({
                where: data.parentId && {
                    category: data.parentId
                },
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
            const list = await Music.findAll({
                where: data.parentId && {
                    category: data.parentId
                },
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
        return await Music.destroy({
            where: { id }
        })
    }
}

module.exports = MusicService;