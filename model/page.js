// 通用模板
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('page', {
        // id
        id: {
            type: DataTypes.INTEGER,   // 类型
            primaryKey: true,         // 主键
            allowNull: false,         // 是否可以为空
            autoIncrement: true      // 是否自增
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "name"    
        },
        site:{
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "site"
        },
        link:{
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "link"
        },
        image:{
            type: DataTypes.STRING,
            allowNull: true,
            fiele: "image"
        },
        background:{
            type: DataTypes.STRING,
            allowNull: true,
            fiele: "background"    
        },
        content:{
            type: DataTypes.STRING,
            allowNull: true,
            fiele: "content"    
        },
        sort:{
            type: DataTypes.STRING,
            allowNull: true,
            fiele: "sort"  
        },
    })
}