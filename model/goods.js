// 商品
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('goods', {
        // id
        id: {
            type: DataTypes.INTEGER,   // 类型
            primaryKey: true,         // 主键
            allowNull: false,         // 是否可以为空
            autoIncrement: true      // 是否自增
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "name"        // 自定义列名称
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "img"
        },
        faveValue:{
            type: DataTypes.INTEGER,
            allowNull: false,
            fiele: "faveValue"
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull: false,
            fiele: "price"
        },
        tips:{
            type: DataTypes.STRING,
            allowNull: true,
            fiele: "tips"
        },
        content:{
            type: DataTypes.TEXT,
            allowNull: true,
            fiele: "content"
        },
        parentId:{
            type: DataTypes.INTEGER,
            allowNull: true,
            fiele: "parentId"
        },
    })
}