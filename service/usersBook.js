const db = require('../config/db')         // 引入配置文件
const Sequelize = db.sequelize;
const UsersBook = Sequelize.import("../model/usersBook.js");
UsersBook.sync({ force: false });    // 自动创建表 (加force:true, 会先删掉表后再建表)

class UsersBookService {
    /*
    * 新增
    */
    static async add(data) {
        return await UsersBook.create(data)
    }

    /*
    *  查询
    */
    static async getList(mobileNo) {
        const list = await UsersBook.findAll({
            where: { mobileNo }
        });
        return {
            list
        };
    }
    /*
        *  删除
    */
    static async delete(id) {
        return await UsersBook.destroy({
            where: { id }
        })
    }
}

module.exports = UsersBookService;