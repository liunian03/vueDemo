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
            <div></div>
        </div>
        <div class="bulletin-wrapper"></div>
    </div>
</template>

<script>
    export default {
        props: {
            sellers: {}
        },
        data() {
            return {
                msg: require('../../../data').seller//添加数据
            }
        },
        created() {
            this.classMap = ['decrease','discount','special','invoice','guarantee']
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin"
    .content-wrapper{
        display: flex;
        margin-top:0.48rem;
        margin-left: 0.48rem;
        margin-bottom:0.36rem;
    }
    .avatar{
        margin-right:0.32rem;
    }
    .avatar img{
        width:1.28rem;
        height:1.28rem;
        border-radius: 0.04rem;
    }
    .title span{
        float:left;
    }
    /*.title .brand img{
        height:0.36rem;
        margin-right:0.12rem;
        vertical-align: middle;
    }*/
    .title .brand{
        width:0.6rem;
        height:0.36rem;
        bg-image('brand')
        background-size:0.6rem 0.36rem;
        background-repeat :no-repeat;
        margin-right:0.12rem;
    }
    .title{
        margin-bottom:0.16rem;
        padding-top: 0.04rem;
        overflow: hidden;
    }
    .title span.brand-name{
        font-size:0.32rem;
        line-height:0.36rem;
        font-weight: bold;
        /*color:#fff;*/
    }
    .description{
        margin-bottom: 0.2rem;
        overflow: hidden;
    }
    .description span{
        float:left;
        font-size: 0.24rem;
        font-weight: 200;
        line-height: 0.24rem;
        /*color:#fff;*/
    }
    .support{
        overflow: hidden;
    }
    .support img{
        width:0.25rem;
        height:0.25rem;
        vertical-align: middle;
        float: left;
    }
    .support span{
        float:left;
        font-size: 0.2rem;
        font-weight: 200;
        line-height: 0.24rem;
        /*color:#fff;*/
    }
    .icon{
        float:left;
        width:0.24rem;
        height:0.24rem;
        margin-right:0.08rem;
        background-size:0.24rem 0.24rem;
        background-repeat :no-repeat;
    }
    .icon.decrease{
        bg-image('decrease_1')
    }
    .icon.discount{
        bg-image('discount_1')
    }
    .icon.guarantee{
        bg-image('guarantee_1')
    }
    .icon.invoice{
        bg-image('invoice_1')
    }
    .icon.special{
        bg-image('special_1')
    }
</style>
