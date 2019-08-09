const db = require('../config/db')         // 引入配置文件
const Sequelize = db.sequelize;
const Category1 = Sequelize.import("../model/category1.js");
const Category2 = Sequelize.import("../model/category2.js");
const Category = Sequelize.import("../model/category.js");
Category1.sync({ force: false });    // 自动创建表 (加force:true, 会先删掉表后再建表)
Category2.sync({ force: false });
Category.sync({ force: false });

class CategoryService {
    /*
    * 新增大分类
    */
    static async addCategory(data) {
        return await Category.create(data)
    }

    /*
    * 新增一级分类
    */
    static async addCategory1(data) {
        return await Category1.create(data)
    }

    /*
    *  查询一级分类
    */
    static async getCategory1Info(id) {
        return await Category1.findOne({
            where: { id }
        })
    }
    static async getCategoryInfo(id) {
        return await Category.findOne({
            where: { id }
        })
    }
    /*
    * 新增二级分类
    */
    static async addCategory2(data) {
        return await Category2.create(data)
    }

    /*
    *  查询二级分类
    */
    static async getCategory2Info(id) {
        return await Category2.findOne({
            where: { id }
        })
    }
    static async getCategoryList(data) {
        if (data) {
            const { pageIndex, pageSize } = data;
            const list = await Category.findAndCountAll({
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
            const list = await Category.findAll({
                order: [
                    ['sort', 'ASC']
                ]
            });
            return {
                list
            };
        }
    }
    static async getCategory2ById(parentId) {
        const list = await Category2.findAll({
            where: { parentId },
            order: [
                ['sort', 'ASC']
            ]
        });
        return {
            list
        };
    }
    static async getCategory1List(data) {
        if (data) {
            const { pageIndex, pageSize } = data;
            const list = await Category1.findAndCountAll({
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
            const list = await Category1.findAll({
                order: [
                    ['sort', 'ASC']
                ]
            });
            return {
                list
            };
        }
    }
    static async getCategory2List(data) {
        if (data) {
            const { pageIndex, pageSize } = data;
            const list = await Category2.findAndCountAll({
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
            const list = await Category2.findAll({
                order: [
                    ['sort', 'ASC']
                ]
            });
            return {
                list
            };
        }
    }
    static async deleteCategory(id) {
        return await Category.destroy({
            where: { id }
        })
    }
    /*
        *  删除
    */
    static async deleteCategory1(id) {
        return await Category1.destroy({
            where: { id }
        })
    }
    /*
        *  删除
    */
    static async deleteCategory2(id) {
        return await Category2.destroy({
            where: { id }
        })
    }
}

module.exports = CategoryService;