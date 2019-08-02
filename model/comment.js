// 订单
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('comment', {
        // id
        id: {
            type: DataTypes.INTEGER,   // 类型
            primaryKey: true,         // 主键
            allowNull: false,         // 是否可以为空
            autoIncrement: true      // 是否自增
        },
        // 用户Id
        userId: {
            type: DataTypes.STRING, 
            allowNull: false,
            fiele: "userId"        // 自定义列名称
        },
        // 类型   1、视频    2、文章
        type:{
            type: DataTypes.INTEGER,
            allowNull: false,
            fiele: "type"      
        },
        // 视频Id
        videoId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            fiele: "videoId"      
        },
        // 文章Id
        articleId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            fiele: "articleId"      
        },
        // 评论内容
        content:{
            type: DataTypes.TEXT,
            allowNull: false,
            fiele: "content"    
        }
    })
}