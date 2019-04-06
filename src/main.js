//入口文件
import  Vue from 'vue'

//导入App组件
import app from './App.vue'

//导入MUI样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/app.css'

//导入MUI扩展图标
import  './lib/mui/css/icons-extra.css'

//导入路由模块并且安装
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入自己的路由模块
import router from  './router.js'

//导入vuex模块
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      user:'',
      account:''
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })

//导入vue-resource
import vueResource from 'vue-resource'
Vue.use(vueResource)

//导入时间插件
/*import  moment from 'moment'
Vue.filter('dataFormat',function (pattern='YYYY-MM-DD HH-MM-SS') {
    return moment().format()
    
})*/
//导入swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper) 


//导入缩略图的插件
import vuePreview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(vuePreview)

//导入element-ul插件
import ElementUI from 'element-ui';
import { Button} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
Vue.use(Button)

//按需导入mint-ui
/*
import {Header,Swipe, SwipeItem,Button, Toast} from 'mint-ui'
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);*/

new  Vue({
    el:"#app",
    data:{},
    methods:{},
    render:c => c(app),
    router,
    store
}).$mount('.app')