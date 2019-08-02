1、routes
在routes文件夹下建一个文件 ，新增路由
2、controllers
在controllers文件夹下新建一个文件  新增控制器
3、service
在service文件夹下新建一个文件  新增 数据查询
4、model
在model文件夹下新建文件   新增 数据模型


Model类的API
3.1 removeAttribute() - 移除属性
3.2 sync() - 同步模型到数据库
3.3 drop() - 删除数据库中的表
3.4 schema() - 指定schema
3.5 getTableName() - 获取表名
3.6 addScope() - 添加限制范围
3.7 scope() - 应用限制范围
3.8 findAll() - 查询多条数据
3.9 findById() - 通过Id查询单条数据
3.10 findOne() - 查询单条数据
3.11 aggregate() - 聚合查询
3.12 count() - 统计查询结果数
3.13 findAndCount() - 分页查询
3.14 max() - 查询最大值
3.15 min() - 查询最大值
3.16 sum() - 求和
3.17 build() - 创建新实例
3.18 create() - 创建保存新实例
3.19 findOrInitialize() - 查找或初始化
3.20 findOrCreate() - 查找或创建
3.21 findCreateFind() - 查找或创建
3.22 upsert() - 创建或更新
3.23 bulkCreate() - 创建多条记录
3.24 truncate() - 截断模型
3.25 destroy() - 删除记录
3.26 restore() - 恢复记录
3.27 update() - 更新记录
3.28 describe() - 查询表信息

Validations - 验证

foo: {
    type: Sequelize.STRING,
    validate: {
      is: ["^[a-z]+$",'i'],     // 只允许字母
      is: /^[a-z]+$/i,          // 只允许字母
      not: ["[a-z]",'i'],       // 不能使用字母
      isEmail: true,            // 检测邮箱格式 (foo@bar.com)
      isUrl: true,              // 检查Url格式 (http://foo.com)
      isIP: true,               // 检查 IPv4 或 IPv6 格式
      isIPv4: true,             // 检查 IPv4
      isIPv6: true,             // 检查 IPv6
      isAlpha: true,            // 不能使用字母
      isAlphanumeric: true,     // 只允许字母数字字符
      isNumeric: true,          // 只能使用数字
      isInt: true,              // 只能是整数
      isFloat: true,            // 只能是浮点数
      isDecimal: true,          // 检查数字
      isLowercase: true,        // 检查小写字母
      isUppercase: true,        // 检查大写字母
      notNull: true,            // 不允许null
      isNull: true,             // 只能为null
      notEmpty: true,           // 不能空字符串
      equals: 'specific value', // 只能使用指定值
      contains: 'foo',          // 必须包含子字符串
      notIn: [['foo', 'bar']],  // 不能是数组中的任意一个值
      isIn: [['foo', 'bar']],   // 只能是数组中的任意一个值
      notContains: 'bar',       // 不能包含子字符串
      len: [2, 10],              // 值的长度必在 2 和 10 之间
      isUUID: 4,                // 只能是UUID
      isDate: true,             // 只能是日期字符串
      isAfter: "2011-11-05",    // 只能使用指定日期之后的时间
      isBefore: "2011-11-05",   // 只能使用指定日期之前的时间
      max: 23,                  // 允许的最大值
      min: 23,                  // 允许的最小值
      isArray: true,            // 不能使用数组
      isCreditCard: true,       // 检查是有效的信用卡

      // 也可以自定义验证:
      isEven: function(value) {
        if(parseInt(value) % 2 != 0) {
          throw new Error('Only even values are allowed!')
        // we also are in the model's context here, so this.otherField
        // would get the value of otherField if it existed
        }
      }
    }
  }