// 通用模板
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tempModal', {
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
        imgUrl:{
            type: DataTypes.STRING,
            allowNull: true,
            fiele: "imgUrl"
        },
        tempId:{
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "tempId"
        },
        pageId:{
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "pageId"
        },
        pageTempId:{
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "pageTempId"
        },
        link:{
            type: DataTypes.STRING,
            allowNull: true,
            fiele: "link"
        },
        type:{
            type: DataTypes.STRING,
            allowNull: true,
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