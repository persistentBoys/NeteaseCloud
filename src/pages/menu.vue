<template>
    <div>
    <div class="title">
        <router-link to="/menu/recomment"><span>推荐</span></router-link>
        <router-link to="/menu/friend"><span>朋友</span></router-link>
        <router-link to="/menu/radio"><span>电台</span></router-link>
    </div>

    <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "menu"
    }
</script>

<style scoped>
    .title{height: 30px;background-color: #404040;margin: 0;padding: 0}
    span{font-size: 16px;color: white;margin: 0 47px}
</style>