const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('book', {
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
        // 作者
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "author"
        },
        // 描述
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            fiele: "content"
        },
        // 所属分类
        parentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            fiele: "parentId"
        },
        // 图片
        img: {
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "img"
        },
        // 标签
        tips: {
            type: DataTypes.STRING,
            allowNull: true,
            fiele: "tips"
        },
        // isVip
        isVip: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
            fiele: "isVip"
        },
        // 状态   1连载 2完结
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            fiele: "status"
        }
    })
}