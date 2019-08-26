const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('music', {
        // id
        id: {
            type: DataTypes.INTEGER,   // 类型
            primaryKey: true,         // 主键
            allowNull: false,         // 是否可以为空
            autoIncrement: true      // 是否自增
        },
        // 所属分类
        category: {
            type: DataTypes.INTEGER,
            allowNull: false,
            fiele: "category"
        },
        // 名称
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "name"
        },
        // 歌手  每个演员用,分隔
        musicist: {
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "musicist"
        },
        // 封面图
        img: {
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "img"
        },
        // 音乐地址
        url: {
            type: DataTypes.TEXT,
            allowNull: true,
            fiele: "url"
        },
        // 歌词
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            fiele: "content"
        },
        // 标签
        tips: {
            type: DataTypes.STRING,
            allowNull: true,
            fiele: "tips"
        }
    })
}