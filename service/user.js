const db = require('../config/db')         // 引入配置文件
const Sequelize = db.sequelize;
const User = Sequelize.import("../model/user");
User.sync({ force: false });    // 自动创建表 (加force:true, 会先删掉表后再建表)

class UserService {
    /*
    * 创建用户
    */
    static async createUser(data) {
        return await User.create(data)
    }
    /*
        *  查询用户列表
    */
    static async getUserList(data) {
        if (data) {
            const { pageIndex, pageSize } = data;
            const list = await User.findAndCountAll({
                attributes: ['userId', 'userName', 'mobileNo'],
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
            const list = await User.findAll({
                attributes: ['userId', 'userName', 'mobileNo'],
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
    *  查询用户详情
    */
    static async getUserInfo(mobileNo) {
        return await User.findOne({
            where: { mobileNo }
        })
    }
    /*
        *  删除
    */
    static async delete(mobileNo) {
        return await User.destroy({
            where: { mobileNo }
        })
    }

    /*
    * 编辑
    */
    static async update(data) {
        return await User.update(data, { where: { mobileNo: data.mobileNo } });
    }
}

module.exports = UserService;