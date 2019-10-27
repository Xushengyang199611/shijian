<template>
    <div >
    <!-- nav-->
    <div id="nav">
        <ul class="nav_center">
            <!-- left -->
            <li>
                <ul>
                    <li>
                        拾间欢迎您 ！
                        <span>|</span>
                    </li>
                    <li>
                        <a href="#">登录</a>
                        <span>|</span>
                    </li>
                    <li>
                        <a href="#">注册</a>
                    </li>
                </ul>
            </li>
            <!-- right -->
            <li>
                <ul>
                    <li>
                        <a href="#">我的订单</a>
                        <span>|</span>
                    </li>
                    <li>
                        <a href="#">个人中心</a>
                        <span>|</span>
                    </li>
                    <li>
                        <a href="#">客户服务</a>
                    </li>
                </ul>
            </li>
            
        </ul>
    </div>

    <!-- bottom -->
    <div id="header">
        <a href="#">
            <img class="header_left" src="../../assets/images/MyHeader/logo.png" alt="">
        </a>
        <div class="header_right">
            <div><a class="sy" href="/">首页</a></div>
            <div><a href="http://localhost:8080/#/Product">鲜花产品</a></div>
            <div><a href="http://localhost:8080/#/class">花语课堂</a></div>
            <div><a href="http://localhost:8080/#/encyclopedias">拾间百科</a></div>
            <div><a href="http://localhost:8080/#/aboutwe">关于我们</a></div>
        </div>
    </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/*nav*/
#nav{
    width: 100%;
    height: 40px;
    background: #eeeeee;
}
.nav_center{
    width: 1000px;
    height: 40px;
    /* background: #ea3367; */
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.nav_center li{
    line-height: 40px;
}
.nav_center :first-child ul,.nav_center :last-child ul{
    display: flex;
}
.nav_center li ul li{
    font-size: 14px;
}
.nav_center li ul li a{
    font-size: 14px;
    color: #999;
    text-decoration: none;
}
.nav_center li ul li a:hover{
    text-decoration: underline;
    color: #ea3367;
}
.nav_center li ul li span{
    margin: 0 8px;
    color: #999;
}


#header{
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.header_left{
    width: 100px;
    height: 40px;
    padding: 10px 0;
}
.header_right{
    width: 750px;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.header_right div a{
    font-size: 18px;
    color: #3f3f3f;
    font-weight: 600;
    text-decoration: none;
    display: block;
    line-height: 62.4px;
    height: 62.4px;
    padding: 0 42.6px;
}
/*
.header_right div:first-child{
    background-color: #ea3367;
}
.sy{
    color: #fff !important;
}
*/
.header_right div a:hover{
    background: #ea3367;
    color: #fff;
}
</style>
