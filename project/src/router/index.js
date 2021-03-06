import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Templates/Home'
import Works from '@/components/Templates/Works'
import Posts from '@/components/Templates/Posts'
import Skillset from '@/components/Templates/Skillset'
import Profile from '@/components/Templates/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/skillset',
      name: 'Skillset',
      component: Skillset
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
