<template>
    <div>
        <!-- banner -->
        <el-carousel class="el-carousel" :interval="1000" arrow="always" height="500px">
            <el-carousel-item v-for="item in pic" :key="item.id">
                <img :src="item.url" alt="" class="banner">
            </el-carousel-item>
        </el-carousel>

        <!-- <el-carousel class="el-carousel" indicator-position="outside" height="400px">
            <el-carousel-item v-for="item in pic" :key="item.id">
                <img :src="item.url" alt="" class="banner">
            </el-carousel-item>
        </el-carousel> -->


        <!-- advantage -->
        <div id="advantage">
            <!-- 上 -->
            <div class="advantage_top">
                <span>---  &nbsp;&nbsp;ADVANTAGE&nbsp;&nbsp; ---</span>
                <span>时间优势</span>
                <span>捨间，国内时尚精品花店加盟</span>
            </div>
            <!-- 中 -->
            <ul class="advantage_center">
                <li>
                    <img class="advantage" src="../../assets/images/Index/advantage.jpg" alt="">
                </li>
                <li>
                    <ul>
                        <li>
                            <img src="../../assets/images/Index/icon01.png" alt="">
                            <div>
                                <span>时尚的精品花店</span>
                                <span>创立于北京的拾间是国内一线城市和港澳台</span>
                                <span>知名的精品花店品牌。</span>
                            </div>
                        </li>
                        <li>
                            <img src="../../assets/images/Index/icon01.png" alt="">
                            <div>
                                <span>时尚的精品花店</span>
                                <span>创立于北京的拾间是国内一线城市和港澳台</span>
                                <span>知名的精品花店品牌。</span>
                            </div>
                        </li>
                        <li>
                            <img src="../../assets/images/Index/icon01.png" alt="">
                            <div>
                                <span>时尚的精品花店</span>
                                <span>创立于北京的拾间是国内一线城市和港澳台</span>
                                <span>知名的精品花店品牌。</span>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>
                            <img src="../../assets/images/Index/icon01.png" alt="">
                            <div>
                                <span>时尚的精品花店</span>
                                <span>创立于北京的拾间是国内一线城市和港澳台</span>
                                <span>知名的精品花店品牌。</span>
                            </div>
                        </li>
                        <li>
                            <img src="../../assets/images/Index/icon01.png" alt="">
                            <div>
                                <span>时尚的精品花店</span>
                                <span>创立于北京的拾间是国内一线城市和港澳台</span>
                                <span>知名的精品花店品牌。</span>
                            </div>
                        </li>
                        <li>
                            <img src="../../assets/images/Index/icon01.png" alt="">
                            <div>
                                <span>时尚的精品花店</span>
                                <span>创立于北京的拾间是国内一线城市和港澳台</span>
                                <span>知名的精品花店品牌。</span>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
            <!-- 下 -->
            <div class="advantage_bottom">
                <a href="#">我要咨询 > ></a>
            </div>
        </div>
        <!-- support -->
        <div id="support">
            <!-- 上 -->
            <div class="support_top">
                <span>---  &nbsp;&nbsp;SUPPORT&nbsp;&nbsp; ---</span>
                <span>加盟支持</span>
                <span>拾间，业内最专业的连锁加盟</span>
            </div>
            <!-- 中 -->
            <ul class="support_center">
                <li>
                    <img class="support" src="../../assets/images/Index/support.jpg" alt="">
                </li>
                <li>
                    <ul>
                        <li>
                            <div>
                                <img src="../../assets/images/Index/icon02.png" alt="">
                                <span>协助门店选址</span>
                            </div>
                            <span>提供专业的选址测评支持，并进行选址资源对接，保障</span>
                            <span>顺利开展业务。</span>
                        </li>
                        <li>
                            <div>
                                <img src="../../assets/images/Index/icon03.png" alt="">
                                <span>协助门店选址</span>
                            </div>
                            <span>提供专业的选址测评支持，并进行选址资源对接，保障</span>
                            <span>顺利开展业务。</span>
                        </li>
                        <li>
                            <div>
                                <img src="../../assets/images/Index/icon04.png" alt="">
                                <span>协助门店选址</span>
                            </div>
                            <span>提供专业的选址测评支持，并进行选址资源对接，保障</span>
                            <span>顺利开展业务。</span>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>
                            <div>
                                <img src="../../assets/images/Index/icon05.png" alt="">
                                <span>协助门店选址</span>
                            </div>
                            <span>提供专业的选址测评支持，并进行选址资源对接，保障</span>
                            <span>顺利开展业务。</span>
                        </li>
                        <li>
                            <div>
                                <img src="../../assets/images/Index/icon06.png" alt="">
                                <span>协助门店选址</span>
                            </div>
                            <span>提供专业的选址测评支持，并进行选址资源对接，保障</span>
                            <span>顺利开展业务。</span>
                        </li>
                        <li>
                            <div>
                                <img src="../../assets/images/Index/icon07.png" alt="">
                                <span>协助门店选址</span>
                            </div>
                            <span>提供专业的选址测评支持，并进行选址资源对接，保障</span>
                            <span>顺利开展业务。</span>
                        </li>
                    </ul>
                </li>
            </ul>
            <!-- 下 -->
            <div class="support_bottom">
                <a href="#">我要咨询 > ></a>
            </div>
        </div>
        <!-- process -->
        <div id="process_bg">
            <div id="process">
                <!-- 上 -->
                <div class="process_top">
                    <span>---  &nbsp;&nbsp;PROCESS&nbsp;&nbsp; ---</span>
                    <span>加盟流程</span>
                </div>
                <!-- 中 -->
                <ul class="process_center">
                    <li>
                        <img class="process" src="../../assets/images/Index/process.jpg" alt="">
                    </li>
                    <li>
                        <ul>
                            <li>
                                <div>
                                    <span>1</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>咨询</span>
                                    <span>加盟意向咨询，到总部参观考察</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>2</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>签署</span>
                                    <span>签订加盟合同，加盟商缴纳费用</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>3</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>装修</span>
                                    <span>协助店铺选址，情蛊和店面设计</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <div>
                                    <span>4</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>培训</span>
                                    <span>到总部参加初级花艺和开业培训</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>5</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>营销</span>
                                    <span>开通电商，准备营销活动和物料</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>6</span>
                                    <span></span>
                                </div>
                                <div>
                                    <span>开业</span>
                                    <span>花艺师上门布置店面和正式开业</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <!-- 下 -->
                <div class="process_bottom">
                    <a href="#">我要咨询 > ></a>
                </div>
            </div>
        </div>
        <!-- show -->
        <div id="show">
            <!-- 上 -->
            <div class="show_top">
                <span>---  &nbsp;&nbsp;SHOW&nbsp;&nbsp; ---</span>
                <span>门店展示</span>
            </div>
            <!-- 中 -->
            <ul class="show_center">
                <li>
                    <a href="#">
                        <img src="../../assets/images/Index/show_01.jpg" alt="">
                    </a>
                    <h6>北京（华林国际店）</h6>
                    <span></span>
                    <p>核心商圈独立店铺类型，与果汁饮品跨界合作的精品</p><br>
                    <p>复合店</p>
                </li>
                <li>
                    <a href="#">
                        <img src="../../assets/images/Index/show_02.jpg" alt="">
                    </a>
                    <h6>北京（华林国际店）</h6>
                    <span></span>
                    <p>核心商圈独立店铺类型，与果汁饮品跨界合作的精品</p><br>
                    <p>复合店</p>
                </li>
                <li>
                    <a href="#">
                        <img src="../../assets/images/Index/show_03.jpg" alt="">
                    </a>
                    <h6>北京（华林国际店）</h6>
                    <span></span>
                    <p>核心商圈独立店铺类型，与果汁饮品跨界合作的精品</p><br>
                    <p>复合店</p>
                </li>
            </ul>
            <!-- 下 -->
            <div class="show_bottom">
                <a href="#">更多门店 > ></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{//banner图
        pic:[
        {id:1,url:require('../../assets/images/Index/banner01.jpg')},
        {id:2,url:require('../../assets/images/Index/banner02.jpg')},
        {id:3,url:require('../../assets/images/Index/banner03.jpg')},
        {id:4,url:require('../../assets/images/Index/banner04.jpg')}
        ]
        }
    }
}
</script>

<style scoped>
/*banner*/
.banner {
    width:100%;
    height:100%;
}
/* 解决自定义滚动条 x 轴显示问题 */
.el-carousel {
    position: static;
}
/*advantage*/
#advantage{
    width: 1000px;
    height: 440px;
    margin: 0 auto;
    margin-top: 40px; 
}
/*上*/
.advantage_top{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
}
.advantage_top :nth-child(1){
    font-size: 14px;
    color: #848081;
    margin-bottom: 8px;
}
.advantage_top :nth-child(2){
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
}
.advantage_top :nth-child(3){
    font-size: 20px;
    color: #666666;
}
/*中*/
.advantage_center{
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}
.advantage_center :nth-child(2) ul li,.advantage_center :nth-child(3) ul li{
    display: flex;
    justify-content: space-around;
}
.advantage_center :not(:first-child) img{
    width: 41px;
    height: 34px;
    margin-left: 20px;
    margin-right: 20px;
}
.advantage_center :not(:first-child) ul li div{
    display: flex;
    flex-direction: column;
}
.advantage_center :not(:first-child) ul li div :first-child{
    font-size: 16px;
    color: #333333;
    text-align: left;
    margin-bottom: 20px;
}
.advantage_center :not(:first-child) ul li div :not(:first-child){
    font-size: 12px;
    color: #999999;
    text-align: left;
    margin-bottom: 10px;
}
.advantage_center :not(:first-child) ul li div :last-child{
    margin-bottom: 16px;
}
/*下*/
/*
.advantage_bottom a{
    display: block;
    float: right;
    width: 110px;
    height: 26px;
    line-height: 26px;
    text-decoration: none;
    border: 1px solid #ea3367;
    border-radius: 5px;
    font-size: 12px;
    color: #333333;
}
*/
.advantage_bottom a,.support_bottom a,.process_bottom a,.show_bottom a{
    display: block;
    float: right;
    width: 110px;
    height: 26px;
    line-height: 26px;
    text-decoration: none;
    border: 1px solid #ea3367;
    border-radius: 5px;     
    font-size: 12px;
    color: #333333;
}
.advantage_bottom a:hover,.support_bottom a:hover,.process_bottom a:hover,.show_bottom a:hover{
    background: #ea3367;
    color:#fff;
}

/*support*/
#support{
    width: 1000px;
    height: 440px;
    margin: 0 auto;
    margin-top: 40px; 
}
/*上*/
.support_top{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
}
.support_top :nth-child(1){
    font-size: 14px;
    color: #848081;
    margin-bottom: 8px;
}
.support_top :nth-child(2){
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
}
.support_top :nth-child(3){
    font-size: 20px;
    color: #666666;
}
/*中*/
.support_center{
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}
.support_center :nth-child(2) ul li,.support_center :nth-child(3) ul li{
    display: flex;
    justify-content: space-around;
}
.support_center :not(:first-child) img{
    width: 41px;
    height: 34px;
    /* margin-left: 25px; */
    margin-right: 15px;
}
.support_center :not(:first-child) ul li{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
.support_center :not(:first-child) ul li div{
    display: flex;
    justify-content: flex-start;
}
.support_center :not(:first-child) ul li div :last-child{
    font-size: 16px;
    color: #333333;
    margin-bottom: 20px;
}
.support_center :not(:first-child) ul li{
    font-size: 12px;
    color: #999999;
    /* margin-left: 25px; */
    margin-bottom: 10px;
} 
.support_center :not(:first-child) ul li :last-child{
    text-align: left;
    margin-top: 8px;
}
/*下*/
/*
.support_bottom a{
    display: block;
    float: right;
    width: 110px;
    height: 26px;
    line-height: 26px;
    text-decoration: none;
    border: 1px solid #ea3367;
    border-radius: 5px;
    font-size: 12px;
    color: #333333;
}
*/

/*process*/
#process_bg{
    width: 100%;
    height: 550px;;
    background-image: url("../../assets/images/Index/process_bg.jpg");
    background-repeat: no-repeat;
}
#process{
    width: 1000px;
    height: 540px;
    margin: 0 auto;
    margin-top: 40px; 
    padding: 25px 0;
}
/*上*/
.process_top{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
}
.process_top :nth-child(1){
    font-size: 14px;
    color: #848081;
    margin-bottom: 8px;
}
.process_top :nth-child(2){
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
}
.process_top :nth-child(3){
    font-size: 20px;
    color: #666666;
}
/*中*/
.process_center{
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}
.process_center :nth-child(2) ul li,.process_center :nth-child(3) ul li{
    display: flex;
    justify-content: space-between;
}
.process_center :not(:first-child) ul li :first-child{
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    /* margin-top: 12px; */
}
.process_center :not(:first-child) ul li :first-child :first-child{
    font-size:44px;
    color: #333333;
    font-weight: bolder;
    /* margin-left: 15px; */
    margin-right: 30px;
}
.process_center :not(:first-child) ul li :first-child :nth-child(2){
    display: block;
    width: 2px;
    height: 75px;
    background: #cccccc;
}
.process_center :not(:first-child) ul li :last-child :first-child{
    display: block;
    font-size:20px;
    color: #333333;
    /* font-weight: bold; */
    text-align: left;
    margin-left: 10px;
}
.process_center :not(:first-child) ul li :last-child :last-child{
    display: block;
    font-size:14px;
    color:#999999;
    text-align: left;
    margin-left: 10px;
}
/*下*/
/*
.process_bottom a{
    display: block;
    float: right;
    width: 110px;
    height: 26px;
    line-height: 26px;
    text-decoration: none;
    border: 1px solid #ea3367;
    border-radius: 5px;
    font-size: 12px;
    color: #333333;
}
*/

/*show*/
#show{
    width: 1000px;
    height: 440px;
    margin: 0 auto;
    margin-top: 40px; 
    margin-bottom: 80px;
}
/*上*/
.show_top{
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
}
.show_top :nth-child(1){
    font-size: 14px;
    color: #ea3367;
    margin-bottom: 8px;
}
.show_top :nth-child(2){
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
}
/*中*/
.show_center{
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}
.show_center li a img{
    width: 320px;
    height: 200px;
}
.show_center li a img:hover{
    box-shadow: 0 0 18px rgba(0,0,0,0.25);
    transform: scale(1.08, 1.08);
    transition: 1s ease-out;
}
.show_center li h6{
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: left;
    /* margin-left: 5px; */
    border-bottom: 1px solid #ea3367;
    padding-bottom: 20px;
}
.show_center li p{
    font-size: 14px;
    text-align: left;
    color: #999999;
}
/*下*/
/*
.show_bottom a{
    display: block;
    float: right;
    width: 110px;
    height: 26px;
    line-height: 26px;
    text-decoration: none;
    border: 1px solid #ea3367;
    border-radius: 5px;
    font-size: 12px;
    color: #333333;
}
*/
.advantage,.support,.process{
    box-shadow: 10px 10px 20px rgba(0,0,0,0.2);
}
</style>

