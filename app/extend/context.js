module.exports = {
    success(msg, data, total) {
        this.body = {
            code: 0,
            success: true,
            result: data,
            total,
            msg
        }
    },
    failure(msg, data) {
        this.body={
            code:-1,
            success:false,
            result:data,
            msg
        }
    }
}