<template>
    <div>
       <div class="header">
           <a href="" class="focus">我关注的他们<span><img src="../../images/28.png" alt="" width="23px" height="23px"></span></a>
           <a href="" class="pho1"><img src="../../images/boy.png" alt="" preview width="35px" height="35px"><span>AlanWalker</span></a>
           <a href="" class="pho2"><img src="../../images/girl.png" alt="" preview width="40px" height="35px"><span>毛不易</span></a>
       </div>
        <div class="dynamic">
            <div class="dynamic-left">
                <a href="" class="singer"><img src="../../images/36.png" width="40px" height="40px"></a>
            </div>
          <div class="dynamic-right">
              <span class="share"><a href="">美国音乐风向标</a>分享歌手：</span>
              <a href="" class="focus-btn"><input type="button" value="+关注" ></a>
              <span class="fans">29165粉丝</span>

              <div class="dynamic-bot">
                <span>我听闻最美的故事，是公主死去了，屠龙的少年还在燃烧</span>
                  <div>
                  <img src="../../images/35.jpg" alt="" width="280px" height="280px">
                  </div>
                  <div class="usual">
                  <a href=""><img src="../../images/37.png" alt=""></a>
                  <a href=""><img src="../../images/38.png" alt=""></a>
                  <a href=""><img src="../../images/39.png" alt=""></a>
                  <a href=""><img src="../../images/40.png" alt=""></a>
                  </div>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
       data(){
           return {}
       },
        methods:{}
    }
</script>

<style scoped>
    .header {
        height: 80px;
        background-color: #404040;
    }

    .focus {
        display: block;
        margin: 0 0 5px 10px;
        font-size: 14px;
        color: white;
    }
    .focus img {
        margin: 0 0 -4px 0
    }
    .pho1 span,.pho2 span{font-size: 14px;}
    .share{font-size: 14px;display: inline-block;color: white}
    .fans{font-size: 12px;display: block; margin: 0 0 0 20px;color: white}
    .focus-btn{position: absolute;right: 5px;top:180px}
    .dynamic{display: flex;
        background-color: #404040;opacity: 0.8}
    .dynamic-left{flex: 2}
    .dynamic-left .singer{display:inline-block;margin: 10px 0 0 10px;}
    .dynamic-right{flex:10;margin: 20px 0 0 0;}
    .dynamic-bot span{font-size: 14px;color: white;margin: 0 8px 0 0;display: inline-block}
    .usual{display: flex;justify-content: space-around}
    .usual img{width: 30px;height: 30px;}
</style>