import { createRouter, createWebHistory} from 'vue-router'
import Start from '../pages/Start.vue'
import Runner from '../pages/Runner/Runner.vue'
import Sponsor from '../pages/Sponsor.vue'
import Events from '../pages/Events.vue'
import Login from '../pages/Login.vue'
import NewRunner from '../pages/Runner/NewRunner.vue'
import MenuRunner from '../pages/Runner/MenuRunner.vue'

const routes= [
    {
        path: '/',
        name: 'Start',
        component: Start
    },
    {
        path: '/runner',
        name: 'Runner',
        component: Runner
    },
    {
        path: '/sponsor',
        name: 'Sponsor',
        component: Sponsor
    },
    {
        path: '/events',
        name: 'Events',
        component: Events
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/newrunner',
        name: 'NewRunner',
        component: NewRunner
    },
    {
        path: '/menurunner',
        name: 'MenuRunner',
        component: MenuRunner
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router