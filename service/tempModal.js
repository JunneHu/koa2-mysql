const db = require('../config/db')         // 引入配置文件
const Sequelize = db.sequelize;
const TempModal = Sequelize.import("../model/tempModal.js"); 
TempModal.sync({ force: false });    // 自动创建表 (加force:true, 会先删掉表后再建表)

class TempModalService {
    /*
    * 新增
    */
    static async addTempModal(data) {
        return await TempModal.create(data)
    }

    /*
    *  查询
    */
    static async getTempModal(id) {
        return await TempModal.findOne({
            where: { id }
        })
    }

    /*
    *  查询列表
    */
    static async getList(data) {
        if (data.pageIndex && data.pageSize) {
            const { pageIndex, pageSize } = data;
            const list = await TempModal.findAndCountAll({
                where: data.tempId && {
                    tempId: data.tempId,
                    pageId:data.pageId,
                    pageTempId:data.pageTempId
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
            const list = await TempModal.findAll({
                where: data.tempId && {
                    tempId: data.tempId,
                    pageId:data.pageId,
                    pageTempId:data.pageTempId
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
        return await TempModal.destroy({
            where: { id }
        })
    }
}

module.exports = TempModalService;