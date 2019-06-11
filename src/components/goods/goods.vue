<template>
    <div class="goods">
        <div class="menu-wrapper">
            <ul>
                <li v-for="item in goods" class="menu-item">
                    <span class="text border-1px">
                        <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
                        {{item.name}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="goods-wrapper">
            <ul>
                <li v-for="item in goods" class="food-list">
                    <h1 class="title">{{item.name}}</h1>
                    <ul>
                        <li v-for="item in goods.foods">
                            <div></div>
                            <div></div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        name: "goods",
        data() {
            return{
                goods:require('../../../data').goods,
            }
        },
        created() {
            this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/icon.css";
    @import '../../common/stylus/mixin.styl'
    .goods
        display :flex;
        width:100%;
        position:absolute;
        top:3.53rem;
        bottom:0.94rem;
        overflow :hidden;
        .menu-wrapper
            flex:0 0 1.6rem;
            width:0.16rem;
            background :#f3f5f7;
            .menu-item
                display :table;
                height:1.08rem;
                width:1.12rem;
                padding-left:0.24rem;
                padding-right:0.24rem;
                line-height 0.28rem;
                .text
                    display :table-cell;
                    width:1.12rem;
                    color:#07111B;
                    font-size:0.24rem;
                    font-weight :200;
                    vertical-align :middle;
                    border-1px(rgba(7, 17, 27, 0.1));
                .icon
                    float: left;
                    width: 0.24rem;
                    height: 0.24rem;
                    margin-right: 0.04rem;
                    background-size: 0.24rem 0.24rem;
                    background-repeat: no-repeat;
                &.decrease
                    bg-image('decrease_3')
                &.discount
                    bg-image('discount_3')
                &.guarantee
                    bg-image('guarantee_3')
                &.invoice
                    bg-image('invoice_3')
                &.special
                    bg-image('special_3')
        .goods-wrapper
            flex :1;
            .food-list
                .title
                    height:0.52rem;
                    background:#f3f5f7;
                    border-left:0.02rem solid #d9dde1;
                    font-size:0.24rem;
                    line-height :0.52rem;
                    color:rgb(147,153,159);
                    padding-left:0.26rem;
</style>
