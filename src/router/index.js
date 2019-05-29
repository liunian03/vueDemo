//定义路由
import Vue from "vue"
import VueRouter from "vue-router"
//import组件
import goods from '../components/goods/goods'
import ratings from '../components/ratings/ratings'
import sellers from '../components/sellers/sellers'

Vue.use(VueRouter);

//实例化VueRouter对象
export default new VueRouter({
    routes: [
        {
            path: '/',//默认显示商品页面
            redirect: 'goods'
        }, {
            path: '/goods',
            component: goods,
            name: 'goods'
        }, {
            path: '/ratings',
            component: ratings,
            name: 'ratings'
        }, {
            path: '/sellers',
            component: sellers,
            name: 'sellers'
        }],
    linkActiveClass: 'active'//添加点击激活class

})



