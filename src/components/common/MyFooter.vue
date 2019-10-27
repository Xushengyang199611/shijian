<template>
    <div id="footer">
    <div class="footer_center">
    <!-- 左-->
        <ul class="footer_left">
            <li>
                <h6>购物指南</h6>
                <ul>
                    <li>
                        <a class="" href="#">购物流程</a>
                    </li>
                    <li>
                        <a class="" href="#">售后服务</a>
                    </li>
                    <li>
                        <a class="" href="#">支付方式</a>
                    </li>
                </ul>
            </li>
            <li>
                <h6 class="">买家帮助</h6>
                <ul>
                    <li>
                        <a class="" href="#">新手指南</a>
                    </li>
                    <li>
                        <a class="" href="#">服务保障</a>
                    </li>
                    <li>
                        <a class="" href="#">常见问题</a>
                    </li>
                </ul>
            </li>
            <li>
                <h6 class="">商家帮助</h6>
                <ul>
                    <li>
                        <a class="" href="#">商家入驻</a>
                    </li>
                    <li>
                        <a class="" href="#">商家后台</a>
                    </li>
                </ul>
            </li>
            <li>
                <h6 class="">关于我们</h6>
                <ul>
                    <li>
                        <a class="" href="#">关于拾间</a>
                    </li>
                    <li>
                        <a class="" href="#">联系我们</a>
                    </li>
                    <li>
                        <span><img src="../../assets/images/MyFooter/wechat.png" alt=""/></span>&nbsp;&nbsp;&nbsp;
                        <span><img src="../../assets/images/MyFooter/sinablog.png" alt=""/></span>
                    </li>
                </ul>
            </li>
        </ul>
    <!-- 右-->
            <ul class="footer_right">
                <li>
                    <h6>拾间商城客户端</h6>
                    <ul>
                        <li>
                            <a href="#">
                                <img src="../../assets/images/MyFooter/ios.png" alt=""/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../../assets/images/MyFooter/android.png" alt=""/>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <img src="../../assets/images/MyFooter/erweima.png" alt=""/>
                </li>
            </ul>
        </div>
        <!-- 下部分-->
        <div class="footer_bottom">
            本网站直接或间接向消费者推销商品或者服务的商业宣传均属于“广告”（包装及参数、售后保障等商品信息除外）
            <br/><br/><br/>
            Copyright © 2019 - 2020 shejian.com 版权所有
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#footer{
    width: 100%;
    background: #ea3367;
    padding-bottom: 50px;
}
.footer_center{
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
}
.footer_left{
    width: 550px;
    display: flex;
    justify-content: space-between
}
.footer_left>li>ul>li{
    padding: 5px;
}
.footer_left>li>h6,.footer_right>li>h6{
    color: #fff;
    font-weight: bold;
    margin-bottom: 10px;
}
.footer_left>li>ul>li>a{
    font-size: 14px;
    color: #fff;
    text-decoration: none;
}
.footer_left>li>ul>li>a:hover{
    color: #f9d0db;
}
.footer_right{
    width: 300px;
    display: flex;
    justify-content: space-between;
}
.footer_right>li>ul{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.footer_right li ul li a{
    margin-top: 5px;
    margin-left: 10px;
}
.footer_bottom{
    font-size: 14px;
    color: #fff;
}
</style>
