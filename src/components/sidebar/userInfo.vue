<template>
    <div class="user_total">
        <div class="user">
             <a href="##"><img src="../../images/57.png" alt="" width="40px" height="40px"></a>
             <p>{{this.$store.state.user.nickname}}</p>
        </div>
      
      <div class="sign">
        <el-row >
  <el-button round size="mini">签到</el-button>
        </el-row>
      </div>
   
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.user_total{display: flex}
.user{flex: 3}
.user img{margin: 20px 0 0 10px}
.sign{margin: 23px 10px 0 0}

</style>


