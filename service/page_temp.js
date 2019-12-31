const db = require('../config/db')         // 引入配置文件
const Sequelize = db.sequelize;
const PageTemp = Sequelize.import("../model/page_temp.js");
PageTemp.sync({ force: false });    // 自动创建表 (加force:true, 会先删掉表后再建表)

class PageTempService {
    /*
    * 新增
    */
    static async addPageTemp(data) {
        return await PageTemp.create(data)
    }

    /*
    *  查询
    */
    static async getPageTemp(id) {
        return await PageTemp.findOne({
            where: { id }
        })
    }
 
    /*
    *  查询列表
    */
    static async getList(data) {
        if (data.pageIndex && data.pageSize) {
            const { pageIndex, pageSize } = data;
            const list = await PageTemp.findAndCountAll({
                where: data.pageId && {
                    pageId: data.pageId
                },
                limit: parseInt(pageSize),
                offset: parseInt(pageIndex - 1) * parseInt(pageSize),
                order: [
                    ['sort', 'ASC'],
                    ['updatedAt', 'ASC'],
                ]
            });
            return {
                list: list.rows,
                pageIndex: parseInt(pageIndex),
                pageSize: 10,
                total: list.count,
                totalPageTemp: Math.ceil(list.count / pageSize),
            };
        } else {
            const list = await PageTemp.findAll({
                where: data.pageId && {
                    pageId: data.pageId
                },
                order: [
                    ['sort', 'ASC'],
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
        return await PageTemp.destroy({
            where: { id }
        })
    }

    static async update(data,index) {
        if(index){
            return await PageTemp.update({ sort: index }, { where: { id: data.id } }); 
        }else {
            return await PageTemp.update({ height: data.height }, { where: { id: data.id } }); 
        }
    }
}

module.exports = PageTempService;