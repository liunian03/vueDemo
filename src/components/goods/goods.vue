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
                        <li v-for="food in item.foods" class="food-item border-1px">
                            <div class="icon">
                                <img :src="food.icon" alt="">
                            </div>
                            <div class="food-content">
                                <h2 class="name">{{food.name}}</h2>
                                <p v-if="food.description" class="desc">{{food.description}}</p>
                                <div class="extra">
                                    <span>月售{{food.sellCount}}份</span>
                                    <span>好评率{{food.rating}}%</span>
                                </div>
                                <div class="price">
                                    <span class="new-price">￥{{food.price}}</span>
                                    <span v-if="food.oldPrice" class="old-price">￥{{food.oldPrice}}</span>
                                </div>
                            </div>
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
        /*overflow :hidden;*/
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
                .food-item
                    padding:0.36rem 0;
                    margin:0 0.36rem;
                    display:flex;
                    font-size:0;
                    border-1px(rgba(7, 17, 27, 0.1));
                    &:last-child
                        border-none();
                    .icon
                        display :inline-block;
                        width:1.14rem;
                        height:1.14rem;
                        margin-right:0.2rem;
                        img
                            width:1.14rem;
                            height:1.14rem;
                            border-radius :0.04rem;
                .food-content
                    .name
                        font-size :0.28rem;
                        line-height :0.28rem;
                        color:rgb(7,17,27);
                        padding-top :0.04rem;
                        margin-bottom :0.16rem;
                    .desc
                        color:rgb(147,153,159);
                        font-size :0.2rem;
                    .extra
                        margin:0.16rem 0;
                        color:rgb(147,153,159);
                        font-size :0.2rem;
                        span:first-child
                            margin-right :0.24rem;
                    .price
                        .new-price
                            font-size :0.28rem;
                            color:#F01414;
                            font-weight :700;
                            line-height :0.28rem;
                        .old-price
                            font-size:0.2rem;
                            font-weight :700;
                            line-height :0.28rem;
                            color:#93999F;
                            margin-left :0.16rem;
                            text-decoration :line-through;
                            
                            
                            
    
    
    
    
    
    
    
    
</style>
