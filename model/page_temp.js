// 通用模板
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('page_temp', {
        // id
        id: {
            type: DataTypes.INTEGER,   // 类型
            primaryKey: true,         // 主键
            allowNull: false,         // 是否可以为空
            autoIncrement: true      // 是否自增
        },
        pageId:{
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "pageId"    
        },
        tempId:{
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "tempId"    
        },
        sort:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 999,
            fiele: "sort"
        },
        active:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
            fiele: "active" 
        },
        height:{
            type: DataTypes.INTEGER,
            allowNull: true,
            fiele: "height" 
        }
    })
}