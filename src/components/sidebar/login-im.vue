<template>
    <div class="login-im">
        <p>登录网易云音乐</p>
        <p>手机电脑多端同步，尽享海量高品质音乐</p>
        <router-link to="/user">
             <el-row>
      <el-button round size="mini">立即登录</el-button>
        </el-row>
        </router-link>
       
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.login-im{display: flex;flex-direction: column;align-items: center;}
.login-im p{font-size: 12px}
el-button{opacity: 0.6}
</style>


