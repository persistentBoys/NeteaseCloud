<template>
    <div class="register">
        <div class="register_header">
            <router-link to="/user">
           <img src="../images/56.png" alt="" width="35px" height="35px">
            </router-link>
        <span>手机号注册</span>
        </div>
        <div class="info">
            <input type="text" minlength="11" maxlength="11" placeholder="+86 请输入手机号"  class="phone" v-model="rePhone">
            <input type="password"  minlength="6" placeholder="设置登录密码，不少于6位"  class="phone" v-model="rePassword">
            <input type="text"  placeholder="请输入昵称"  class="nickname" v-model="nickname" minlength="3" maxlength="8">
        </div>
        <input type="button" class="btn" value="注册" @click="getReData">
    </div>
</template>

<script>

import axios from 'axios'
export default {
      data(){
          return {
              rePhone:'',
              rePassword:'',
              nickname:''
          }
      },
      methods:{
          getReData(){
             axios({
        method:'post',
        url:'/register',
        data:{
            loPhone:this.rePhone,
            loPassword:this.rePassword,
            nickname:this.nickname
        },
        dataType:'json'
    }).then(function(res){
            var err_code = res.data.err_code
            if(err_code === 1){
                window.alert('账户已存在')
            }
            else if(err_code === 0){
              window.alert ('恭喜您，注册成功')
            }
             else{
              window.alert ('the server is busing')
            }
          })
          }
      }
}
</script>

<style scoped>
.register{background: white;}
.register_header{background: #2f4f4f;height: 50px;}
.register_header img{display: inline-block;vertical-align: middle}
.register_header span{line-height: 50px;text-align: center;vertical-align: middle;color: white}
.phone{border: none;border-bottom: 1px solid }
.btn{width: 320px;height: 30px;border-radius: 15px;background:#B5B5B5; margin:0 0 0 28px}
</style>


