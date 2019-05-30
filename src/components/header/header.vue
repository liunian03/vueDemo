<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img :src="msg.avatar" alt="">
            </div>
            <div class="contents">
                <div class="title">
                    <!--                    <span class="brand"><img src="./brand@2x.png" alt=""></span>-->
                    <span class="brand"></span>
                    <span class="brand-name">{{msg.name}}</span>
                </div>
                <div class="description">
                    <span>{{msg.description}}</span>
                    <span>/{{msg.deliveryTime}}分钟送达</span>
                </div>
                <div class="support" v-if="msg.supports">
                    <!--                    <img src="./decrease_1@2x.png" alt="">-->
                    <!--                    动态获取数组里的图片及详情-->
                    <span class="icon" :class="classMap[msg.supports[0].type]"></span>
                    <span>{{msg.supports[0].description}}</span>
                </div>
            </div>
            <!--            小图标-->
            <div class="support-count" v-if="msg.supports" @click="showDetail">
                <span class="count">{{msg.supports.length}}个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <div class="bulletin-wrapper" @click="showDetail">
            <span class="bulletin-title"></span><span class="bulletin-text">{{msg.bulletin}}</span><i class="icon-keyboard_arrow_right"></i>
        </div>
<!--        背景图片-->
        <div class="item-bac">
            <img :src="msg.avatar" alt="">
        </div>
<!--        弹出层-->
        <div class="detail" v-show="detailShow">
            <div class="detail-wrapper clearfix">
                <div class="detail-main">
                    <h1 class="detail-name">{{msg.name}}</h1>
                </div>
            </div>
            <div class="detail-close">
                <i class="icon-close"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            sellers: {}
        },
        data() {
            return {
                msg: require('../../../data').seller,//添加数据
                detailShow:true,
            }
        },
        methods:{
            showDetail(){
                this.detailShow = true;
            }
        },
        created() {
            this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/icon.css"
    @import '../../common/stylus/mixin.styl'

    .header {
        color: #fff;
        background:rgba(7,17,27,0.5);
        position relative;
        padding-top: 0.48rem;
    }

    .content-wrapper {
        display: flex;
        padding-left: 0.48rem;
        position: relative;
        margin-bottom: 0.36rem;
    }

    .avatar {
        margin-right: 0.32rem;
    }

    .avatar img {
        width: 1.28rem;
        height: 1.28rem;
        border-radius: 0.04rem;
    }

    .title span {
        float: left;
    }

    /*.title .brand img{
        height:0.36rem;
        margin-right:0.12rem;
        vertical-align: middle;
    }*/
    .title .brand {
        width: 0.6rem;
        height: 0.36rem;
        bg-image('brand')
        background-size: 0.6rem 0.36rem;
        background-repeat: no-repeat;
        margin-right: 0.12rem;
    }

    .title {
        margin-bottom: 0.16rem;
        padding-top: 0.04rem;
        overflow: hidden;
    }

    .title span.brand-name {
        font-size: 0.32rem;
        line-height: 0.36rem;
        font-weight: bold;
        /*color:#fff;*/
    }

    .description {
        margin-bottom: 0.2rem;
        overflow: hidden;
    }

    .description span {
        float: left;
        font-size: 0.24rem;
        font-weight: 200;
        line-height: 0.24rem;
        /*color:#fff;*/
    }

    .support {
        overflow: hidden;
    }

    .support img {
        width: 0.25rem;
        height: 0.25rem;
        vertical-align: middle;
        float: left;
    }

    .support span {
        float: left;
        font-size: 0.2rem;
        font-weight: 200;
        line-height: 0.24rem;
        /*color:#fff;*/
    }

    .icon {
        float: left;
        width: 0.24rem;
        height: 0.24rem;
        margin-right: 0.08rem;
        background-size: 0.24rem 0.24rem;
        background-repeat: no-repeat;
    }

    .icon.decrease {
        bg-image('decrease_1')
    }

    .icon.discount {
        bg-image('discount_1')
    }

    .icon.guarantee {
        bg-image('guarantee_1')
    }

    .icon.invoice {
        bg-image('invoice_1')
    }

    .icon.special {
        bg-image('special_1')
    }

    .support-count {
        position: absolute;
        right: 0.24rem;
        bottom: 0;
        height:0.48rem;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 1.5rem;
        font-size 0;
        display :flex;
        line-height :0.48rem;
        padding:0 0.16rem;
    }

    .support-count .count {
        font-size: 0.2rem;
        font-weight: 200;
        margin-right: 0.04rem;
        padding-left:0.08rem;
    }

    .support-count .icon-keyboard_arrow_right {
        font-size: 0.2rem;
        line-height :0.48rem;
    }
    .bulletin-wrapper{
        height:0.56rem;
        line-height 0.56rem;
        background:rgba(7,17,27,0.2);
        padding:0 0.24rem;
        align-items:center;
        white-space :nowrap;
        overflow :hidden;
        text-overflow :ellipsis;
        position relative;
    }
    .bulletin-title{
        display :inline-block;
        width:0.4rem;
        height:0.2rem;
        bg-image('bulletin');
        background-repeat:no-repeat;
        background-size:0.4rem 0.2rem;
        margin-right:0.08rem;
        vertical-align: middle;
    }
    .bulletin-text{
        font-size :0.2rem;
        font-weight 200;
    }
    .bulletin-wrapper .icon-keyboard_arrow_right {
        font-size: 0.2rem;
        line-height :0.48rem;
        position absolute;
        right:0.16rem;
        top:0.04rem;
        bottom :0.14rem;
    }
    .item-bac{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        z-index:-1;
        filter blur(0.1rem)
    }
    .item-bac img{
        width:100%;
        height:100%;
    }
    .detail{
        position:fixed;
        z-index:100;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:rgba(7,17,27,0.8);
        /*filter:blur(0.1rem);*/
        overflow :auto;
    }
    .detail-wrapper
        min-height:100%;
        width:100%;
        .detail-main
            margin:1.28rem 0.72rem 0
            padding-bottom:1.28rem
            .detail-name
                font-size :0.32rem;
                font-weight:700;
                line-height:0.32rem;
                text-align:center;
    .detail-close
        position:relative;
        width:0.64rem;
        height:0.64rem;
        margin:-1.28rem auto 0;
        font-size :0.64rem;
        clear:both;

</style>
