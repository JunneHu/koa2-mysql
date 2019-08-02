const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        // id
        userId: {
            type: DataTypes.INTEGER,   // 类型
            primaryKey: true,         // 主键
            allowNull: false,         // 是否可以为空
            autoIncrement: true      // 是否自增
        },
        // 手机号
        mobileNo: {
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "mobileNo"        // 自定义列名称
        },
        // 密码
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "password"
        },
        // 用户名
        userName: {
            type: DataTypes.STRING,
            allowNull: true,
            fiele: "userName"        // 自定义列名称
        },
    })
}