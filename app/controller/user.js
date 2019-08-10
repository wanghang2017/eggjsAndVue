
const Controller = require("egg").Controller;

const crypto = require("crypto");


class UserController extends Controller {
    async login() {
        // let params = this.ctx.request.body;
        // console.log(params);
        let {ctx} = this;
        let {username,password} = ctx.request.body;
        console.log(username,password);
        let user = await this.ctx.service.user.find(username);
        console.log(user);
        if(!user){
            ctx.failure("用户名或密码错误");
            return;
        }
        if(password == user.userpassword){
            let hash = crypto.createHash("md5");
            hash.update(user.id.toLocaleString());
            let token = hash.digest("hex");
            // ctx.app.lru.set(token,user.id);
            ctx.session.uid = user.id;
            ctx.session.username = user.username;
            ctx.success("登陆成功",{token});
            return;
        }else{
            ctx.failure("用户名或密码错误");
            return;
        }
        ctx.failure("登陆失败！")
    }
}

module.exports = UserController;
