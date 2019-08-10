let Service = require("egg").Service;



class UserService extends Service {
    async find(username) {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        const user = await this.app.mysql.get('users', { username});
        return user;
    }
}


module.exports = UserService;