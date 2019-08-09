const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('chapter', {
        // id
        id: {
            type: DataTypes.INTEGER,   // 类型
            primaryKey: true,         // 主键
            allowNull: false,         // 是否可以为空
            autoIncrement: true      // 是否自增
        },
        // 标题
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "title"        // 自定义列名称
        },
        // 内容
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            fiele: "content"
        },
        // 是否免费 默认免费
        isFree: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false,
            fiele: "isFree"
        },
        // 所属书id
        bookId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            fiele: "bookId"
        }
    })
}