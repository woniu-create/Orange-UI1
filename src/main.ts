import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Super from './components/Super.vue'
import Super2 from './components/Super2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path:'/',component: Super},
        {path:'/xxx',component: Super2}
    ]
})
const app=createApp(App)
app.mount('#app')
app.use(router)
