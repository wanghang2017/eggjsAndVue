<template>
  <div class="login">
    <div class="container">
      <input placeholder="请输入账号" type="text" v-model="account" />
      <input placeholder="请输入密码" type="password" v-model="password" />
      <button v-on:click="clickLogin">登陆</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      account: "",
      password: "",
      msg: "vue"
    };
  },
  computed: mapState({
    userinfo: state => state.login.userinfo
  }),
  methods: {
    clickLogin: function(event) {
      // console.log(this.account, this.password)
      this.login({ username: this.account, password: this.password });
    },
    ...mapActions("login", ["login"])
  }
};
</script>
<style lang="css">
* {
  margin: 0;
  padding: 0;
}

input {
  width: 200px;
  outline: none;
  box-shadow: none;
  border: none;
  border-bottom: 1px solid #ccc;
  height: 30px;
  padding: 0 5px;
}
input ::-webkit-input-placeholder {
  color: #ccc;
  font-size: 20px;
}
button {
  border: none;
  border-radius: 3px;
  outline: none;
  box-shadow: none;
  width: 100px;
  height: 30px;
  background: #1c90f3;
}

html,
body {
  width: 100%;
  height: 100%;
}
.login {
  width: 100%;
  height: 100%;
}
.container {
  margin-top: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login .container input {
  margin-bottom: 20px;
}
.login .container button {
  color: #fff;
}
</style>


