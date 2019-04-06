<template>
    <div class="search">
        <div class="search_in">
            <router-link to="/">
                <img src="../images/54.png" alt="" >
            </router-link>
        <form action="/searchText" method="get">
        <input type="text" name="text" id="" v-model="history" class="text">
        <input type="submit" value="搜索" class="search-btn">
        </form>
        
        </div>

        <div class="search_singer">
        <a href="##"><span>按歌手搜索</span><img src="../images/55.png" alt=""></a>
        </div>

        <div class="search_hot">
        <p>热门搜索</p>
        <el-row>
         <el-button round>林宥嘉新歌</el-button>
         <el-button round>路过人间</el-button>
         <el-button round>一曲相思</el-button>
         <el-button round>起风了</el-button>
         <el-button round>花粥</el-button>
         <el-button round>陈鸿宇</el-button>
         <el-button round>绿色</el-button>
          </el-row>
        </div>

         <div class="search_his">
        <p>历史记录</p>
        <el-row>
         <el-button round>毛不易</el-button>
         <el-button round>绿色</el-button>
         <el-button round>陈鸿宇</el-button>
         <el-button round>PDDDDD1</el-button>
         <el-button round>花粥</el-button>
         <el-button round>Flash</el-button>
          </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search",
        data(){
            return {
                history:''
            }
        }
    }
</script>

<style scoped>
.search{background: #ffffff;padding: 0 0 0 10px}
.search img{width:35px; height:35px}
.search_in{display: flex;justify-content: flex-start}
.text{display: inline-block;border:none;border-bottom:1px solid #404040 ;width:277px }
.search_singer{position: relative;border-bottom: 1px solid #f1f2f3}
.search_singer span{position: absolute;top: 6px;font-size: 15px;color: #404040}
.search_singer img{width: 30px;height: 30px;display:inline-block;margin: 1px 0 0 80px}
.el-button{margin: 10px 3px}
.search-btn{height: 35px;margin-top: 5px }
form{display:flex}



</style>