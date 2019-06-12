<template>
    <div id="app">
        <!--<img src="./assets/logo.png">-->
        <v-header :sellers="sellers"></v-header>
        <div class="content">
            <div class="tab-item">
                <router-link to="/goods">商品</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/ratings">评论</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/sellers">商家</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">

    import header from './components/header/header';

    export default {
        data() {
            return {
                sellers: {}
            }
        },
        // created(){//钩子
        //   this.$http.get('/api/sellers').then((response)=>{
        //     // response = response.json();
        //     // if(response.errno===ERR_OK){
        //       this.sellers = response.data;
        //       console.log(this.sellers);
        //     // }
        //   },(err)=>{console.log(err)});
        // },
        name: 'App',
        components: {
            'v-header': header,
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./common/stylus/mixin.styl"
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
        /*padding: 0.15rem;*/
        font-size:0.28rem;
    }

    #app .content {
        display: flex;
        width: 100%;
        height: 0.8rem;
        line-height: 0.8rem;
        border-1px(rgba(7, 17, 27, 0.1));
    }

    #app .content .tab-item {
        flex: 1;
        text-align: center;
    }

    #app .content .tab-item a {
        display: block;
        text-decoration: none;
        color: #333;
    }

    a:active {
        background: red;
    }

    #app .content .tab-item a.active {
        background: none;
        color: rgb(240, 20, 20);
    }
</style>
