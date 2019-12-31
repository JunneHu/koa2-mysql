const db = require('../config/db')         // 引入配置文件
const Sequelize = db.sequelize;
const Temp = Sequelize.import("../model/temp.js"); 
Temp.sync({ force: false });    // 自动创建表 (加force:true, 会先删掉表后再建表)

class TempService {
    /*
    * 新增
    */
    static async addTemp(data) {
        return await Temp.create(data)
    }

    /*
    *  查询
    */
    static async getTemp(id) {
        return await Temp.findOne({
            where: { id }
        })
    }

    /*
    *  查询列表
    */
    static async getList(data) {
        if (data.pageIndex && data.pageSize) {
            const { pageIndex, pageSize } = data;
            const list = await Temp.findAndCountAll({
                where: data.type && {
                    page: data.type
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
            const list = await Temp.findAll({
                where: data.type && {
                    page: data.type
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
        return await Temp.destroy({
            where: { id }
        })
    }
}

module.exports = TempService;