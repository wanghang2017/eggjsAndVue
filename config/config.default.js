module.exports={
    keys:"123",
    // session 是内置插件
    session:{
        renew:true,  // 延长用户Session 有效期
        maxAge: 7*24 *3600 *3600 // 设置session 过期时间
    },
    mysql:{
        // 数据库配置信息
        client:{
            host:"**.**.**.**",
            port:"3306",
            user:"****",
            password:"*****",
            database:"test",
        }
    },
    security:{
        // xframe:{
        //     enable:false
        // },
        // csp:{
        //     enable:false
        // },
        csrf:{
            enable:false
        }
    }



};



