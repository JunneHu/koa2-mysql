// 1级分类
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('category1', {
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
        sort:{   // 排序
            type: DataTypes.INTEGER,
            allowNull: true,
            fiele: "sort"
        }
    })
}