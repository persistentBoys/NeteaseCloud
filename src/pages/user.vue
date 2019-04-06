<template>
    <div class="login">
        <div><img src="../images/43.jpg" alt="" width="100%" height="100%"></div>
        <div class="mui-content">
		    <div class="mui-content-padded">
                <router-link to="/login">
                  <button type="button" class="mui-btn mui-btn-danger mui-btn-block">手机号登录</button>
                </router-link>
                <router-link to="/register">
                  <button type="button" class="mui-btn mui-btn-danger mui-btn-block mui-btn-outlined">注册</button>
                </router-link>
		    </div>
		</div>
        <nav class="login_pettern">
           <a href="##"> <img src="../images/44.png" alt=""><span>微信</span></a>
           <a href="##"> <img src="../images/45.png" alt=""><span>QQ</span></a>
            <a href="##"><img src="../images/46.png" alt=""><span>微博</span></a>
            <a href="##"><img src="../images/47.png" alt=""><span>网易邮箱</span></a>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.login{background: #f6f6f6 }
.login_pettern{margin: 92px 0 0 0 ;display: flex;justify-content:space-around;}
.login_pettern a{display: inline;}
.login_pettern img{widows: 35px;height: 35px}
.login_pettern span{font-size: 12px;display:block;color: #707070;text-align: center}
</style>
