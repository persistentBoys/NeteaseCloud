<template>
  <div class="music_main">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>
          <a href="##">
            <img class="swiper-img" src="../images/48.png" alt>
            <span>私人FM</span>
          </a>
          <a href="##">
            <img class="swiper-img" src="../images/48.png" alt>
            <span>最新电音</span>
          </a>
          <a href="##">
            <img class="swiper-img" src="../images/48.png" alt>
            <span>Sati空间</span>
          </a>
          <a href="##">
            <img class="swiper-img" src="../images/48.png" alt>
            <span>私藏推荐</span>
          </a>
          <a href="##">
            <img class="swiper-img" src="../images/48.png" alt>
            <span>亲子频道</span>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="##">
            <img class="swiper-img" src="../images/48.png" alt>
            <span>古典专区</span>
          </a>
          <a href="##">
            <img class="swiper-img" src="../images/48.png" alt>
            <span>跑步FM</span>
          </a>
          <a href="##">
            <img class="swiper-img" src="../images/48.png" alt>
            <span>小冰电台</span>
          </a>
          <a href="##">
            <img class="swiper-img" src="../images/48.png" alt>
            <span>驾驶模式</span>
          </a>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    
       <article>
         <div class="article_list">
           <ul>
           <li><img src="../images/49.png" alt=""><span>本地音乐(5)</span></li>
           <li><img src="../images/49.png" alt=""><span>本地音乐(5)</span></li>
           <li><img src="../images/49.png" alt=""><span>本地音乐(5)</span></li>
           <li><img src="../images/49.png" alt=""><span>本地音乐(5)</span></li>
         </ul>
         </div>
       </article>

    <div>
      <div class="create_sli">
        <a href="##" class="menu">
          <img src="../images/50.png" alt width="35px" height="35px">
          <span>创建的歌单</span>
        </a>
        <a href="##">
          <img src="../images/51.png" alt width="35px" height="35px">
          <img src="../images/52.png" alt width="35px" height="35px">
        </a>
      </div>
      <ul class="create_ul">
        <li class>
          <img src="../images/53.png" alt width="35px" height="35px">
          <a href>
            我喜欢的音乐
            <span class="number">187首</span>
          </a>
        </li>

        <li class>
          <img src="../images/53.png" alt width="35px" height="35px">
          <a href>
            BGM
            <span class="number">187首</span>
          </a>
        </li>
      </ul>
    </div>
   
    <div>
      <div class="create_sli">
        <a href="##" class="menu">
          <img src="../images/50.png" alt width="35px" height="35px">
          <span>收藏的歌单</span>
        </a>
        <a href="##">
          <img src="../images/51.png" alt width="35px" height="35px">
          <img src="../images/52.png" alt width="35px" height="35px">
        </a>
      </div>
      <ul class="create_ul">
        <li class>
          <img src="../images/53.png" alt width="35px" height="35px">
          <a href>
            [节奏控]超带感的英文歌
            <span class="number">187首</span>
          </a>
        </li>

        <li class>
          <img src="../images/53.png" alt width="35px" height="35px">
          <a href>
            欧美女声|飘渺灵气
            <span class="number">187首</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        autoplay: 3000,
        loop: true
      }
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    }
  }
};
</script>

<style scoped>
.music_main {
  font-size: 12px;
}
.wrapper {
  overflow: hidden;
  margin: 0;
  padding: 0;
  background: #404040;
}
.wrapper a {
  display: inline-block;
}
.wrapper span {
  display: block;
  font-size: 12px;
  color: darkcyan;
  text-align: center;
}
.wrapper img {
  width: 35px;
  height: 35px;
  margin: 0 15px;
}
.article_list ul{padding-left: 15px}
.article_list li{height: 60px;list-style: none;width: 100%;display: flex;justify-content: flex-start;align-items: center;border-bottom: 1px #ffffff solid}
.article_list img{width: 50px;height: 50px;}
.article_list span{font-size: 14px;color: #ffffff;margin-left: 10px}
.create_sli {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.create_sli span {
  font-size: 14px;
  position: absolute;
  top: 10px;
  color: #f1f2f3;
}
.create_ul {
  padding: 0 0 0 15px;
}
.create_ul li {
  display: flex;
  list-style-type: none;
  border-bottom: 1px #ffffff solid;
  padding: 5px 0 5px 0;
}
.create_ul li a {
  color: #f1f2f3;
}
.create_ul li img {
  margin-right: 15px;
}
.number {
  display: block;
}
</style>