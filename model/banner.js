// banner
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('banner', {
        // id
        id: {
            type: DataTypes.INTEGER,   // 类型
            primaryKey: true,         // 主键
            allowNull: false,         // 是否可以为空
            autoIncrement: true      // 是否自增
        },
        img:{
            type: DataTypes.STRING,
            allowNull: false,
            fiele: "img"    
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
            fiele: "url"      
        },
        type: {   // banner类型  1 对外链接   2  内部链接
            type: DataTypes.STRING, 
            allowNull: true,
            fiele: "type"        // 自定义列名称
        },
        sort:{   // 排序
            type: DataTypes.INTEGER,
            allowNull: true,
            fiele: "sort"
        },
        goodsId:{
            type: DataTypes.STRING,
            allowNull: true,
            fiele: "goodsId"
        }
    })
}