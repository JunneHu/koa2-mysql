const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('usersBook', {
        // id
        id: {
            type: DataTypes.INTEGER,   // 类型
            primaryKey: true,         // 主键
            allowNull: false,         // 是否可以为空
            autoIncrement: true      // 是否自增
        },
        // 书id
        bookId: {
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "bookId"        // 自定义列名称
        },
        // 用户Id
        mobileNo: {
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "mobileNo"        // 自定义列名称
        },
    })
}