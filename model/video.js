const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('video', {
        // id
        id: {
            type: DataTypes.INTEGER,   // 类型
            primaryKey: true,         // 主键
            allowNull: false,         // 是否可以为空
            autoIncrement: true      // 是否自增
        },
        // 所属分类  电视  电影  综艺
        category: {
            type: DataTypes.INTEGER,
            allowNull: false,
            fiele: "category"
        },
        // 类型   悬疑  刑侦   青春偶像   校园 
        type: {
            type: DataTypes.INTEGER,
            allowNull: false,
            fiele: "type"
        },
        // 名称
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "name"
        },
        // 演员  每个演员用,分隔
        actor: {
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "actor"
        },
        // 封面图
        img: {
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "img"
        },
        // 集数
        num: {
            type: DataTypes.INTEGER,
            allowNull: false,
            fiele: "num"
        },
        // 每集的播放地址   每个地址用,分隔
        url: {
            type: DataTypes.TEXT,
            allowNull: true,
            fiele: "url"
        },
        // 时长
        time: {
            type: DataTypes.INTEGER,
            allowNull: false,
            fiele: "time"
        },
        // 二级标题
        secondName: {
            type: DataTypes.STRING,
            allowNull: true,
            fiele: "secondName"
        },
        // 简介
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
        },
        // 评分
        grade: {
            type: DataTypes.INTEGER,
            allowNull: true,
            fiele: "grade"
        }
    })
}