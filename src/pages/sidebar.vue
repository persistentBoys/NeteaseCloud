<template>
    <div class="sidebar">
        <loginIm v-show="!this.$store.state.user"></loginIm>
        <userInfo v-show="this.$store.state.user"></userInfo>
        <hr />
       <ul class="lis">
           <li><a href=""><img src="../images/06.png" alt=""><span>我的消息</span></a></li>
           <li><a href=""><img src="../images/07.png" alt=""><span>会员中心</span></a></li>
           <li><a href=""><img src="../images/08.png" alt=""><span>云村有票</span></a></li>
           <li><a href=""><img src="../images/09.png" alt=""><span>商城</span></a></li>
           <li><a href=""><img src="../images/10.png" alt=""><span>游戏推荐</span></a></li>
           <li><a href=""><img src="../images/11.png" alt=""><span>在线听歌免流量</span></a></li>
           <li><a href=""><img src="../images/12.png" alt=""><span>我的好友</span></a></li>
           <li><a href=""><img src="../images/13.png" alt=""><span>附近的人</span></a></li>
           <li><a href=""><img src="../images/14.png" alt=""><span>个性换肤</span></a></li>
           <li><a href=""><img src="../images/15.png" alt=""><span>听歌识曲</span></a></li>
           <li><a href=""><img src="../images/22.png" alt=""><span>定时闹钟</span></a></li>
           <li><a href=""><img src="../images/23.png" alt=""><span>扫一扫</span></a></li>
       </ul>
    
        <div class="sidebar-bot">
            <a href="##"><img src="../images/18.png" alt=""><span>夜间模式</span></a>
            <a href="##" class="bot2"><img src="../images/19.png" alt=""><span>设置</span></a>
            <a href="##" class="bot3"><img src="../images/21.png" alt=""><span>退出</span></a>
        </div>
    </div>
</template>

<script>
import loginIm from '../components/sidebar/login-im.vue'
import userInfo from '../components/sidebar/userInfo.vue'
    export default {
        name: "sidebar",
        components:{loginIm,userInfo}
    }
</script>

<style scoped>
    .sidebar{opacity: 0.9;padding: 0;margin: 0;background: #404040;padding-bottom: 40px}
    .sidebar-top{height:100px;display: flex;justify-content: space-between;background-color: #404040;margin: 0 }
    .sidebar-top img{width: 35px;height: 35px}
    .lis{height: 600px;background-color: #404040;padding: 0 0 0 20px;margin: 0;}
    .lis li{list-style: none;height:50px ;}
    .lis li a{font-size: 14px;color:white ;display: inline-block;display: flex;justify-content: flex-start;margin: auto 0}
    .lis img{width: 30px;height: 30px;margin-right: 8px}
    .lis span{margin:auto 0}
    .sidebar-bot{position: fixed;bottom: 0px;height: 40px;width: 100%;background-color: #404040;border-top: 1px solid #000;}
    .sidebar-bot a{display: inline-block;}
    .sidebar-bot img{width: 30px;height: 30px;}
    .sidebar-bot span{color: white}
    .bot3{margin:0 0 0 80px}
    .bot2{margin: 0 0 0 40px}



</style>