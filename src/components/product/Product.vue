<template>
<div>
    <!-- My location -->
    <div id="my_location">
        <ul>
            <li>
                我的位置:&nbsp;
            </li>
            <li>
                <a href="http://localhost:8080/#/">首页</a>
            </li>
            <li>
                >
            </li>
            <li>
                <a href="http://localhost:8080/#/Product">鲜花产品</a>
            </li>
        </ul>
    </div>
    <!-- banner -->
    <div id="banner">
        <div class="banner_content">
            <h1>爱 永 不 凋 谢</h1>
            <h2>情人节特惠</h2>
            <h3>活动时间:2019.8.7-8.8</h3>
            <a href="#">点击查看</a>
        </div>
    </div>
    <!-- hot recommended -->
    <div id="hot">
        <div class="hot_center">
        <!-- top -->
        <ul class="hot_top">
            <li>
                热门推荐
            </li>
            <li>
                HOT RECOMMENDED
            </li>
        </ul>
        <!-- bottom -->
        <ul class="hot_bottom">
            <li>
                <img src="../../assets/images/Product/product_01.png" alt="">
            </li>
            <li>
                <h1>火热的爱</h1>
                <h2>THE HOT LOVE</h2>
                <div>
                    <em>热烈的爱，不变的心，用一捧玫瑰诠释真爱永恒!</em>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;饱满圆润的花头紧紧拥抱在一起，红玫瑰与多头红玫瑰的组合，大大小小的花苞门，像极了泡泡。红玫瑰代表了爱的炙热，除了爱你还是爱你，次束鲜花适合送给热恋的人。
                    <em>花 语：“此情无计可消除，才下眉头，却上心头。”  李清照《一剪梅》</em>
                    <em>附 送：下单填写留言，即免费赠送精美贺卡！</em>
                    <em>配 送：全国 （可配送至全国2000多城市，市区免配送费）</em>
                </div>
                <a href="#">了解更多</a>
            </li>
        </ul>

        </div>
    </div>
    <!-- send flowers to elders -->
    <div id="elders">
        <div class="elders_center">
        <!-- top -->
        <ul class="elders_top">
            <li>
                送长辈鲜花
            </li>
            <li>
                SEND FLOWERS TO ELDERS
            </li>
        </ul>
        <!-- bottom -->
        <ul class="elders_bottom">
            <li>
                <a href="#">
                    <img src="../../assets/images/Product/product_02.jpg" alt="">
                    <h1>
                        鲜花/星河璀璨<br>
                        ¥ 289
                    </h1>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../../assets/images/Product/product_03.jpg" alt="">
                    <h1>
                        鲜花/母爱-紫红康乃馨<br>
                        ¥ 398
                    </h1>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../../assets/images/Product/product_04.jpg" alt="">
                    <h1>
                        鲜花/幸福万年长<br>
                        ¥ 689
                    </h1>
                </a>
            </li>
        </ul>
        <el-pagination class="fy" background layout="prev, pager, next" :total="30">
        </el-pagination>
        </div>
    </div>
    <!-- high-end flower box series -->
    <div>
    <!-- top -->
    <ul class="high_top">
        <li>
            高端花盒系列
        </li>
        <li>
            HIGH-END FLOWER BOX SERIES
        </li>
    </ul>
    <div id="high">
        <a href="#">
            <div class="high_center">
                <div class="high_center_content">
                    <h1>
                        新娘玫瑰
                    </h1>
                    <h2>
                        新娘玫瑰有着偏成熟韵味的色彩，有着厚实的花瓣，笔直的枝条，
                        毫不逊色与其他玫瑰。为玫瑰订制专属礼盒，完美的细节彰显自
                        身品质。
                    </h2>
                </div>
            </div>
        </a>
    </div>
    <a href="#" class="high_bottom">
        查看更多+
    </a>
    </div>
    <!-- love flowers -->
    <div>
    <!-- top -->
    <ul class="love_top">
        <li>
            热恋鲜花
        </li>
        <li>
            LOVE FLOWERS
        </li>
    </ul>
    <!-- bottom -->
    <div id="love">
        <div class="love_center">
            <!-- left -->
            <a href="#">
                <div class="love_center_left">
                    <img src="../../assets/images/Product/love_big.jpg" alt="">
                    <div>
                        <a href="#">查看更多>></a>
                    </div>
                </div>
            </a>
            <!-- right -->
            <ul class="love_center_right">
                <li>
                    <img src="../../assets/images/Product/love_01.jpg" alt="">
                    <a href="#">
                        浪漫缤纷
                        ¥ 398
                    </a>
                </li>
                <li>
                    <img src="../../assets/images/Product/love_02.jpg" alt="">
                    <a href="#">
                        你的香气
                        ¥ 128
                    </a>
                </li>
                <li>
                    <img src="../../assets/images/Product/love_03.jpg" alt="">
                    <a href="#">
                        慕斯女神
                        ¥ 688
                    </a>
                </li>
                <li>
                    <img src="../../assets/images/Product/love_04.jpg" alt="">
                    <a href="#">
                        牵手一生
                        ¥ 198
                    </a>
                </li>
                <li>
                    <img src="../../assets/images/Product/love_05.jpg" alt="">
                    <a href="#">
                        致美丽的你
                        ¥ 298
                    </a>
                </li>
                <li>
                    <img src="../../assets/images/Product/love_06.jpg" alt="">
                    <a href="#">
                        浪漫缤纷
                        ¥ 888
                    </a>
                </li>
                <li>
                    <img src="../../assets/images/Product/love_07.jpg" alt="">
                    <a href="#">
                        暖心一生
                        ¥ 398
                    </a>
                </li>
                <li>
                    <img src="../../assets/images/Product/love_08.jpg" alt="">
                    <a href="#">
                        白雪公主
                        ¥ 598
                    </a>
                </li>
            </ul>
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/* My location */
#my_location{
    width: 1000px;
    /* height: 20px; */
    /* background: #ea3367; */
    margin: 0 auto;
}
#my_location>ul>li{
    float: left;
    color: #999;
    font-size: 13px;
    margin-bottom: 10px;
}
#my_location>ul>li>a{
    text-decoration: none;
    color: #999;
    font-size: 13px;
}
#my_location>ul :not(:nth-child(1)) :hover{
    color: #ea3367;
}
/*banner*/
#banner{
    background-image: url("../../assets/images/Product/product_banner.jpg");
    background-repeat: no-repeat;
    width: 100%;
    height: 500px;
    margin-bottom: 100px;
    display: flex;
    justify-content: center;
}
.banner_content{
    /* width: 880px; */
    height: 500px;
    padding-top: 50px;
    margin-left: -300px;
}
.banner_content h1{
    font-size: 80px;
    /* font-weight: bold; */
    color: #ea3367;
    text-align: left;
    margin: 35px 0;
}
.banner_content h2{
    font-size: 36px;
    color: #ff438d;
    /* text-align: center; */
    margin-left: 110px;
    width: 180px;
    margin-bottom: 10px;
    border-top: 1px solid #ea3367;
    border-bottom: 1px solid #ea3367;
    padding: 15px;
}
.banner_content h3{
    font-size: 18px;
    color: #666;
    /* text-align: center; */
    margin-left: 110px;
    width: 180px;
    margin-bottom: 15px;
    padding: 15px;
}
.banner_content a{
    display: block;
    width: 200px;
    height: 60px;
    background: #ea3367;
    line-height: 60px;
    border-radius: 30px;
    color: #fff;
    font-size: 18px;
    text-decoration: none;
    /* margin: 0 auto; */
    margin-left: 116px;
    margin-top: 20px;
}
.banner_content a:hover{
    color: #f9d0db;
}

/*hot recommended*/
#hot{
    width: 100%;
    /* height: 420px; */
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    background-color: #fff5f7;
}
.hot_center{
    width: 1000px;
    /* height: 420px; */
    /* background:red; */
}
.hot_top :first-child{
    font-size: 30px;
    font-weight: bold;
    color: #333333;
    text-align: center;
    margin-bottom: 15px;
    margin-top: 45px;
}
.hot_top :last-child{
    font-size: 16px;
    color: #cccccc;
    text-align: center;
    /* margin-bottom: 35px; */
} 
.hot_bottom{
    display: flex;
    justify-content: space-between;
}
.hot_bottom img{
    margin-right: 50px;
}
.hot_bottom h1{
    font-size: 24px;
    color: #666666;
    text-align: left;
    margin: 70px 0 10px 0;
}
.hot_bottom h2{
    font-size: 16px;
    color: #999999;
    text-align: left;
    /* margin-bottom: 10px; */
}
.hot_bottom div{
    line-height: 1.6;
    font-size: 16px;
    color: #666666;
    text-align: left;
    padding: 10px 30px 10px 0;
}
.hot_bottom div em{
    display: block;
    margin: 8px 0;
}
.hot_bottom div :first-child{
    font-size: 18px;
    color: #333333;
}
/* .hot_bottom div :not(:first-child){
    
} */
.hot_bottom a{
    display: block;
    width: 130px;
    height: 36px;
    background: #ea3367;
    font-size: 16px;
    color: #fff;
    line-height: 36px;
    border-radius: 30px;
    text-decoration: none;
    margin-top: 10px;
}
.hot_bottom a:hover{
    color: #f9d0db;
}

/*send flowers to elders*/
#elders{
    width: 100%;
    /* height: 420px; */
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    /* background-color: #fff5f7; */
}
.elders_center{
    width: 1000px;
    /* height: 420px; */
    /* background:red; */
}
.elders_top :first-child{
    font-size: 30px;
    font-weight: bold;
    color: #333333;
    text-align: center;
    margin-bottom: 15px;
    margin-top: 45px;
}
.elders_top :last-child{
    font-size: 16px;
    color: #cccccc;
    text-align: center;
    margin-bottom: 35px;
} 
.elders_bottom{
    display: flex;
    justify-content: space-around;
}
.elders_bottom li{
    width: 310px;
    /* height: 440px; */
    border: 1px solid #cccccc;
    /* background: red; */
}
.elders_bottom li img{
    width: 310px;
    height: 370px;
}
.elders_bottom li img:hover{
    transform: scale(1.03, 1.03);
    transition: 1s ease-out;
}
.elders_bottom li a{
    text-decoration: none;
}
.elders_bottom li a h1{
    margin: 10px 0;
    font-size: 16px;
    color: #666666;
    line-height: 1.5;
}
.elders_bottom li a h1:hover{
    color: #ea3367;
}
.fy{
    /* padding-bottom: 90px; */
    margin-top: 70px;
}

/*high-end flower box series*/
#high{
    width: 100%;
    /* height: 420px; */
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    background-color: #fce6ed;
}
#high a{
    display: block;
    text-decoration: none;
}
.high_center{
    width: 1000px;
    height: 480px;
    background-image: url("../../assets/images/Product/product_banner_02.jpg")
}
.high_top :first-child{
    font-size: 30px;
    font-weight: bold;
    color: #333333;
    text-align: center;
    margin-bottom: 15px;
    margin-top: 45px;
}
.high_top :last-child{
    font-size: 16px;
    color: #cccccc;
    text-align: center;
    margin-bottom: 35px;
} 
.high_center:before{
    content:"";
    display:table;
}
.high_center_content{
    width: 360px;
    height: 110px;
    background: #fff;
    margin-left: 550px;
    margin-top: 280px;
    padding: 20px;
}
.high_center_content h1{
    font-size: 18px;
    color: #666666;
    text-align: left;
}
.high_center_content h2{
    font-size: 14px;
    color: #666666;
    line-height: 1.5;
    margin-top: 10px;
    text-align: left;
}
.high_bottom{
    display: block;
    width: 250px;
    height: 44px;
    background: #ea3367;
    font-size: 16px;
    color: #fff;
    line-height: 44px;
    border-radius: 30px;
    text-decoration: none;
    /* margin-top: 10px; */
    margin: 0 auto;
    margin-bottom: 50px;
}
.high_bottom:hover{
    color: #f9d0db;
}


/*love flowers*/
.love_top :first-child{
    font-size: 30px;
    font-weight: bold;
    color: #333333;
    text-align: center;
    margin-bottom: 15px;
    margin-top: 45px;
}
.love_top :last-child{
    font-size: 16px;
    color: #cccccc;
    text-align: center;
    margin-bottom: 35px;
} 

#love{
    width: 100%;
    /* height: 420px; */
    /* display: flex; */
    /* justify-content: center; */
    margin-bottom: 100px;
    /* background-color: #fce6ed; */
}
.love_center{
    width: 1000px;
    /* height: 420px; */
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    /* background-color: red; */
}
.love_center_left,.love_center_left>img{
    width: 200px;
}
.love_center_left{
    position: relative;
}
.love_center_left div{
    width: 200px;
    height: 80px;
    background: #ea3367;
    position: absolute;
    top:372px;
}
.love_center_left a{
    display: block;
    width: 160px;
    height: 30px;
    border: 1px solid #fff;
    border-radius: 20px;
    text-align: center;
    line-height: 30px;
    text-decoration: none;
    color: #fff;
    margin: 0 auto;
    margin-top: 26px;
}
.love_center_left a:hover{
    color: #f9d0db;
}
.love_center_right{
    display: flex;
    justify-content:space-between;
    flex-direction: row;
    flex-wrap: wrap;
    width: 788px;
}
.love_center_right li{
    margin: 0 0 10px 0;
    width: 186px;
    position: relative;
}
.love_center_right li img{
    width: 186px;
}
.love_center_right li a{
    width: 186px;
    height: 40px;
    display: block;
    background-color: #333333;
    opacity: 0.6;
    font-size: 14px;
    color: #fff;
    position: absolute;
    top: 180px;
    line-height: 40px;
    text-decoration: none;
}
.love_center_right li a:hover{
    background-color: #ea3367;
    opacity: 1;
}
</style>

