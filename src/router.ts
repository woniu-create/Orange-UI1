import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import DocDemo from './components/DocDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
const history = createWebHashHistory()
import {h} from 'vue'
import Markdown from './components/Markdown.vue';

export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
     path: '/doc', 
     component: Doc,
     children: [
         {path: "",component:DocDemo},
         {path: "intro",component:h(Markdown,{path:'../markdown/intro.md',key:'1'})},
         {path: "install",component:h(Markdown,{path:'../markdown/install.md',key:'2'})},
         {path: "get-started",component:h(Markdown,{path:'../markdown/get-started.md',key:'3'})},
         {path: "switch",component: SwitchDemo},
         {path: "button",component: ButtonDemo},
         {path: "dialog",component: DialogDemo},
         {path:"tabs",component: TabsDemo}
        ]
    }
  ]
})

router.afterEach(()=>{
    console.log('路由切换了')
})
