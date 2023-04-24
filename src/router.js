import { createRouter, createWebHashHistory } from "vue-router"
import OneGater from './components/one/OneGater.vue'
import TwoGater from './components/two/TwoGater.vue'
import ThreeGater from './components/three/ThreeGater.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path:'/',
            component: OneGater
        },
        {
            path:'/TwoGater',
            component: TwoGater
        },
        {
            path:'/ThreeGater',
            component: ThreeGater
        }
    ]
});

export default router;