// 订单
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('order', {
        // id
        id: {
            type: DataTypes.INTEGER,   // 类型
            primaryKey: true,         // 主键
            allowNull: false,         // 是否可以为空
            autoIncrement: true      // 是否自增
        },
        goodsId: {
            type: DataTypes.STRING, 
            allowNull: false,
            fiele: "goodsId"        // 自定义列名称
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            fiele: "status"      
        },
        buyNum:{
            type: DataTypes.INTEGER,
            allowNull: false,
            fiele: "buyNum"    
        },
        totalPrice:{
            type: DataTypes.INTEGER,
            allowNull: false,
            fiele: "totalPrice"
        },
    })
}