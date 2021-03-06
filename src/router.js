import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//import Header from './components/Header'
import Logo from './components/Logo'
import ArrangeNumber from './components/ArrangeNumber'
import TextReverse from './components/TextReverse'
import Playground from './components/Playground'
import Roulette from './components/Roulette'
import RollingStoneMagazines500GreatestSongsOfAllTime from './components/RollingStoneMagazines500GreatestSongsOfAllTime'

//Vue.component('vue-header', Header);

export default new Router({
  routes: [
    { path: '/', component: () => import(/* webpackChunkName: "Home" */ './views/Home.vue') },
    { path: '/logo', component: Logo, meta: { title: 'Logo'} },
    { path: '/arrange-number', component: ArrangeNumber, meta: { title: '카드 정렬'}},
    { path: '/text-reverse', component: TextReverse, meta: { title: '문자열 뒤집기'} },
    { path: '/roulette', component: Roulette, meta: { title: '룰렛'} },
    { path: '/RollingStoneMagazines500GreatestSongsOfAllTime', component: RollingStoneMagazines500GreatestSongsOfAllTime, meta: { title: 'Rolling Stone\'s 500 Greatest Songs of All Time ...'} },
    { path: '/playground', component: Playground, meta: { title: '실험실'} }
  ]
})
