<template>
  <div>
    <Topnav />
    <div class="content">
      <aside>
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
      </aside>
      <main>内容</main>
    </div>
  </div>
</template>

<script>
import Topnav from '../components/Topnav.vue'
    export default {
      components:{Topnav}
    }
</script>

<style lang="scss" scoped>
</style>
