<template>
    <div class="recommet">
        
        <div class="wrapper">
    <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide >
		    <img class="swiper-img" src="../../images/slide3.jpg" alt="">
        </swiper-slide>
		 <swiper-slide >
		    <img class="swiper-img" src="../../images/slide2.jpg" alt="">
        </swiper-slide>
        <swiper-slide >
		    <img class="swiper-img" src="../../images/slide.jpg" alt="">
        </swiper-slide>
		 <swiper-slide >
		    <img class="swiper-img" src="../../images/slide2.jpg" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        
    </swiper>
  </div>
        <div class="mid-title">
            <a href=""><img src="../../images/24.png" alt="" ><span>私人FM</span></a>
            <a href=""><img src="../../images/25.png" alt=""><span>每日推荐</span></a>
            <a href=""><img src="../../images/03.png" alt=""><span>歌单</span></a>
            <a href=""><img src="../../images/26.png" alt=""><span>排行榜</span></a>
        </div>
        <div class="song-list">
            <ul><a href="" class="recom">推荐歌单<span><img src="../../images/28.png" alt="" width="23px" height="23px"></span></a>
                <div class="perv">
                <li><a href=""></a><img src="../../images/29.jpg" alt=""><span>一周新歌推荐</span></li>
                <li><a href=""></a><img src="../../images/30.jpg" alt=""><span>极致电音，哈萨ki</span></li>
                <li><a href=""></a><img src="../../images/31.jpg" alt=""><span>全中文咚鼓版</span></li>
                </div>
                <div class="after">
                <li><a href=""></a><img src="../../images/32.jpg" alt=""><span>欧美流行音乐</span></li>
                <li><a href=""></a><img src="../../images/33.jpg" alt=""><span>节奏控</span></li>
                <li><a href=""></a><img src="../../images/34.jpg" alt=""><span>一生必听的200首歌曲</span></li>
                </div>
                </ul>
            <ul><a href="" class="live-tv">LOOK直播<span><img src="../../images/28.png" alt="" width="23px" height="23px"></span></a>
                <div class="middle">
                <li><a href=""></a><img src="../../images/29.jpg" alt=""><span>来了,老弟</span></li>
                <li><a href=""></a><img src="../../images/30.jpg" alt=""><span>随意点噢噢噢</span></li>
                <li><a href=""></a><img src="../../images/31.jpg" alt=""><span>超级甜美小姐姐</span></li>
            </div>
            </ul>
            <ul><a href="" class="news-mus">最新音乐<span><img src="../../images/28.png" alt="" width="23px" height="23px"></span></a>
                <div class="last-prev">
                    <li><a href=""></a><img src="../../images/29.jpg" alt=""><span>来了,老弟</span></li>
                    <li><a href=""></a><img src="../../images/30.jpg" alt=""><span>随意点噢噢噢</span></li>
                    <li><a href=""></a><img src="../../images/31.jpg" alt=""><span>超级甜美小姐姐</span></li>
                </div>
                <div class="last-after">
                    <li><a href=""></a><img src="../../images/32.jpg" alt=""><span>欧美流行音乐</span></li>
                    <li><a href=""></a><img src="../../images/33.jpg" alt=""><span>节奏控</span></li>
                    <li><a href=""></a><img src="../../images/34.jpg" alt=""><span>一生必听的200首歌曲</span></li>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .recommet {
        overflow: hidden;
        position: relative;
        background: #404040
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


    .mid-title span {
        font-size: 12px;
        color: white;
    }
    .song-list {
        background-color: #404040;
        padding: 0;
        margin: 0;
    }
    .song-list ul {
        margin: 0;
        padding: 0 0 0 5px
    }
    .song-list ul li {
        list-style: none;
        width: 110px;
        height: 125px;
    }
    .perv span, .after span,.middle,.last-prev,.last-after{color: white;font-size: 12px;display: inline-block}
    .perv,.after,.middle,.last-prev,.last-after {
        display: flex;
        justify-content: space-around;
    }
    .song-list li img {
        width: 110px;
        height: 80px;
    }
    .recom ,.live-tv,.news-mus{
        display: block;
        margin: 0 0 5px 10px;
        font-size: 16px;
        color: white
    }
    .recom img ,.live-tv img,.news-mus img{
        margin: 0 0 -4px 0
    }
</style>