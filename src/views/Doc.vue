<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
      <transition name="slide">
      <aside v-if="menuVisible">
        <h3>文档</h3>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h3>组件内容</h3>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
        </ol>
      </aside>
      </transition>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts" scope>
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    return { menuVisible };
  },
};
</script>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    /* background: lightgreen; */
  }
}
aside {
  background: #fff;
  box-shadow: 0 5px 5px rgb(51 51 51 / 10%);
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: 10;
  > h3 {
    margin-bottom: 4px;
    padding: 0 16px;
    font-weight: bold;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
        font-size: 16px;
      }
      .router-link-active {
        background: #eaf4f6;
        border-right: 3px solid #99e1f8;
        transition: all 250ms;
      }
    }
  }
}
main {
  overflow: auto;
}
.slide-enter-active,
.slide-leave-active {
  transition: all .3s linear;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-285px);
}


.fade-enter-active,
.fade-leave-active{
  transition: all .25s linear;
}
.fade-enter-from,
.fade-leave-to{
  transform: rotateX(-90deg);
}
</style>
