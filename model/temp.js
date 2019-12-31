// 通用模板
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('temp', {
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
        image:{
            type: DataTypes.STRING,
            allowNull: true,
            fiele: "image"
        },
        type:{
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "type"    
        },
        icon:{
            type: DataTypes.STRING,
            allowNull: true,
            fiele: "icon"    
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
        }
    })
}

/*
站点属性
id、name
页面属性
id、name(页面名)、背景色、
模块属性
id、name、type(模块类型)、sort、
模块数据
id、name、imgUrl、link、content、sort

*/