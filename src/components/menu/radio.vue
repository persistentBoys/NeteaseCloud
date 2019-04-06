<template>
<div class="main">
  <div class="wrapper">
    <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide >
		    <img class="swiper-img" src="../../images/slide3.jpg" alt="">
        </swiper-slide>
		 <swiper-slide >
		    <img class="swiper-img" src="../../images/slide2.jpg" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
  
  <div class="mid-title">
            <a href=""><img src="../../images/24.png" alt="" ><span>电台分类</span></a>
            <a href=""><img src="../../images/25.png" alt=""><span>电台排行</span></a>
            <a href=""><img src="../../images/03.png" alt=""><span>付费精品</span></a>
            <a href=""><img src="../../images/26.png" alt=""><span>音乐课堂</span></a>
  </div>
  <hr>

  <div class="better-radio">今日优选:</div>
  <div class="dynamic">
	  <div class="dynamic-left">
                <a href="" class="singer"><img src="../../images/36.png" width="40px" height="40px"></a>
      </div>
	  <div class="dynamic-right">
              <div class="share"><a href="">林俊杰0327生日快乐</a></div>
              <a href="" class="focus-btn"><img src="../../images/42.png" alt="" width="35px" height="35px"></a>
              <div class="fans"><a>林俊杰1307电台：</a><div><img src="../../images/43.png" alt="" width="20px" height="20px"><span>2951</span></div></div>
	  </div>
  </div>

   <div class="dynamic">
	  <div class="dynamic-left">
                <a href="" class="singer"><img src="../../images/36.png" width="40px" height="40px"></a>
      </div>
	  <div class="dynamic-right">
              <div class="share"><a href="">林俊杰0327生日快乐</a></div>
              <a href="" class="focus-btn2"><img src="../../images/42.png" alt="" width="35px" height="35px"></a>
              <div class="fans"><a>林俊杰1307电台：</a><div><img src="../../images/43.png" alt="" width="20px" height="20px"><span>2951</span></div></div>
	  </div>
  </div>

   <div class="dynamic">
	  <div class="dynamic-left">
                <a href="" class="singer"><img src="../../images/36.png" width="40px" height="40px"></a>
      </div>
	  <div class="dynamic-right">
              <div class="share"><a href="">林俊杰0327生日快乐</a></div>
              <a href="" class="focus-btn3"><img src="../../images/42.png" alt="" width="35px" height="35px"></a>
              <div class="fans"><a>林俊杰1307电台：</a><div><img src="../../images/43.png" alt="" width="20px" height="20px"><span>2951</span></div></div>
	  </div>
  </div>


  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

 <style scoped>
	.main{
	background-color: #404040
	}
	.wrapper{
		overflow: hidden;
	
		margin: 0;
		padding: 0
	}
	.wrapper img{
		width: 100%;
		height: 100%;}
		
	.mid-title {
			height: 50px;
			background-color: #404040;
			display: flex;
			justify-content: space-around;
			padding: 0;
			margin: 0;
		}

	.mid-title img {
			width: 35px;
			height: 35px;
		}
  .better-radio{font-size: 14px;margin: 0 0 0 15px;color: #ffffff} 
	.mid-title  span{font-size: 12px}
  .share{font-size: 14px;color: white;margin: 0 0 8px 0} 
    .fans{font-size: 12px;display: inline-block;color: white;text-align: center;}
    .fans a{margin: 0px 25px 0 0;}
    .fans div{display:inline-block;font-size: 8px}
    .focus-btn{position: absolute;right: 5px;top:420px}
    .focus-btn2{position: absolute;right: 5px;top:500px}
    .focus-btn3{position: absolute;right: 5px;top:580px}
    .dynamic{display: flex; background-color: #404040;opacity: 0.8}
    .dynamic-left{flex: 2}
    .dynamic-left .singer{display:inline-block;margin: 10px 0 0 10px;}
    .dynamic-right{flex:10;margin: 20px 0 0 0;}


</style>

   
