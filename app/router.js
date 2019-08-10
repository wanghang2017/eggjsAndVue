module.exports = app=>{
    let {router,controller} = app;
    router.post("/api/v1/login",controller.user.login);
    // router.get("/api/v1/logout",controller.user.logout);
    // router.get("/home",controller.home.index);
    
}