// 通用模板
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('site', {
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
        img:{
            type: DataTypes.STRING,
            allowNull: true,
            fiele: "img"   
        },
        sort:{
            type: DataTypes.STRING,
            allowNull: true,
            fiele: "sort"   
        }
    })
}
