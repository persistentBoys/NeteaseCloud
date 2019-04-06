<template>
<div>
    <div class="title">
           <router-link to="/sidebar" class="icon1">
               <img src="../images/01.png" width="50px" height="50px">
           </router-link>
           <router-link to="/music" class="icon2">
               <img src="../images/02.png" width="50px" height="50px">
           </router-link>
           <router-link to="/menu" class="icon3">
               <img src="../images/26.png" width="50px" height="50px">
           </router-link>
           <router-link to="/movie" class="icon4">
               <img src="../images/04.png" width="50px" height="50px">
           </router-link>
           <router-link to="/search" class="icon5">
               <img src="../images/05.png" width="50px" height="50px">
           </router-link>
       </div>
        <router-view></router-view>
</div>
</template>
<script>
    //mui的js插件
    export default {
    }
</script>

<style scoped>
    .title {
        height: 50px;
        background-color: #404040;
        border-bottom: 1px #f1f2f3 solid
    }

    router-link {
        width: 35px;
        height: 35px;
    }

    .icon2 {
        margin: 0 0 0 70px
    }

    .icon3 {
        margin: 0 20px
    }

    .icon5 {
        margin: 0 0 0 70px
    }

    .title img {
        width: 35px;
        height: 35px;
    }
</style>
