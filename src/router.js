import VueRouter from 'vue-router'
import sidebar from './pages/sidebar.vue'
import music from './pages/music.vue'
import movie from './pages/movie.vue'
import search from './pages/search.vue'
import menu from './pages/menu.vue'
import recomment from './components/menu/recomment.vue'
import friend from './components/menu/friend.vue'
import radio from './components/menu/radio.vue'
import user from './pages/user.vue'
import primary from './pages/primary.vue'
import login from './pages/login.vue'
import register from './pages/register.vue'

var router=new VueRouter({
    routes:[{path:'/',component:primary,
    children:[{path:'/sidebar',component:sidebar}, {path:'',component:music},
    {path:'/menu',component:menu,children:[{path:'/',component:recomment},{path:'friend',component:friend},{path:'radio',component:radio},{path:'recomment',component:recomment}]}, 
    {path:'/movie',component:movie},{path:'/music',component:music}]},{path:'/search',component:search},{path:'/user',component:user},{path:'/login',component:login},{path:'/register',component:register}]})

export default router