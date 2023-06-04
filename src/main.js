import { createApp } from 'vue'
import App from './App.vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import { createRouter, createWebHashHistory } from 'vue-router'

import Learn from './components/Learn.vue'
import About from './components/About.vue'
import HelloWorld from './components/HelloWorld.vue'

import AksharaRupagalu from './components/AksharaRupagalu.vue'
import Gunitaksharagalu from './components/Gunitaksharagalu.vue'
import Samyuktaksharagalu from './components/Samyuktaksharagalu.vue'
import Sankegalu from './components/Sankegalu.vue'
import Symbols from './components/Symbols.vue'
import Shasanagalu from './components/Shasanagalu.vue'

import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import './assets/main.css'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HelloWorld,
        },
        {
            path: '/learn',
            name: 'ವರ್ಣಮಾಲೆ',
            component: Learn,
        },
        {
            path: '/learn/AksharaRupagalu',
            name: 'ಅಕ್ಷರ ರೂಪಗಳು',
            component: AksharaRupagalu,
        },
        {
            path: '/learn/Gunitaksharagalu',
            name: 'ಗುಣಿತಾಕ್ಷರಗಳು',
            component: Gunitaksharagalu,
        },
        {
            path: '/learn/Samyuktaksharagalu',
            name: 'ಸಂಯುಕ್ತಾಕ್ಷರಗಳು',
            component: Samyuktaksharagalu,
        },
        {
            path: '/learn/Sankegalu',
            name: 'ಸಂಖ್ಯೆಗಳು',
            component: Sankegalu,
        },
        {
            path: '/learn/Symbols',
            name: 'ಚಿಹ್ನೆಗಳು',
            component: Symbols,
        },
        {
            path: '/learn/Shasanagalu',
            name: 'ಶಾಸನಗಳು',
            component: Shasanagalu,
        },
        {
            path: '/about',
            name: 'About',
            component: About,
        },
        {
            path: '/:pathMatch(.*)',
            component: HelloWorld,
        },
    ],
})

createApp(App)
    .use(router)
    .use(VueSidebarMenu)
    .mount("#app")
