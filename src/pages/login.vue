<template>
  <div class="login">
    <div class="login_header">
      <router-link to="/user">
        <img src="../images/56.png" alt width="35px" height="35px">
      </router-link>
      <span>手机号登录</span>
    </div>
    <div class="info">
      <input
        type="text"
        minlength="11"
        maxlength="11"
        placeholder="+86 请输入手机号"
        class="phone"
        v-model="loPhone"
      >
      <input type="password" placeholder="请输入密码" class="password" v-model="loPassword">
    </div>
    <input type="button" class="btn" value="登录" @click="getData">
  </div>
</template>

<script>
import ajax from "../api/ajax.js";
import axios from "axios";
export default {
  data() {
    return {
      loPhone: "",
      loPassword: ""
    };
  },
  methods: {
    getData() {
      var that = this;
      axios({
        method: "post",
        url: "/login",
        data: {
          loPhone: this.loPhone,
          loPassword: this.loPassword,
          nickname: this.nickname
        },
        dataType: "json"
      }).then(function(res) {
        that.$store.state.user = res.data.session.user;
        console.log(that.$store.state.user);
        // store.state.user = res.data.session.user
        var err_code = res.data.err_code;
        console.log(err_code);
        if (err_code === 500) {
          window.alert("请输入正确的手机号或密码");
        } else if (err_code === 0) {
          window.alert("恭喜您，登录成功");
          that.$router.push({ path: "/" });
        } else if (err_code == 1) {
          window.alert("phone or password is error");
        }
      });
    }
  }
};
</script>

<style scoped>
.login {
  background: white;
}
.login_header {
  background: #2f4f4f;
  height: 50px;
}
.login_header img {
  display: inline-block;
  vertical-align: middle;
}
.login_header span {
  line-height: 50px;
  text-align: center;
  vertical-align: middle;
  color: white;
}
.phone,
.nickname,
.password {
  border: none;
  border-bottom: 1px solid;
}
.btn {
  width: 320px;
  height: 30px;
  border-radius: 15px;
  background: #b5b5b5;
  margin: 0 0 0 28px;
}
</style>


