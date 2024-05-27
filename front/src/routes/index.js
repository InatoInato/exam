import { createRouter, createWebHistory} from 'vue-router'
import Start from '../pages/Start.vue'

const routes= [
    {
        path: '/',
        name: 'Start',
        component: Start
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

module.exports = router