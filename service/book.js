const db = require('../config/db')         // 引入配置文件
const Sequelize = db.sequelize;
const Book = Sequelize.import("../model/book.js"); 
Book.sync({ force: false });    // 自动创建表 (加force:true, 会先删掉表后再建表)

class BookService {
    /*
    * 新增商品
    */
    static async addBook(data) {
        return await Book.create(data)
    }

    /*
    *  查询商品
    */
    static async getBook(id) {
        return await Book.findOne({
            where: { id }
        })
    }

    /*
    *  查询列表
    */
    static async getList(data) {
        if (data) {
            const { pageIndex, pageSize } = data;
            const list = await Book.findAndCountAll({
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
            const list = await Book.findAll({
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
        return await Book.destroy({
            where: { id }
        })
    }
}

module.exports = BookService;