<demo>
  常规使用
</demo>
<template>
  <div>
    <!-- <Tabs :selected="x" @update:selected="x = $event"> -->
    <Tabs v-model:selected="x">
      <Tab title="吃饭">吃饭</Tab>
      <Tab title="睡觉">睡觉</Tab>
      <Tab title="游戏">游戏</Tab>
    </Tabs>
  </div>
</template>
<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from 'vue';
export default {
  components: {
    Tabs,
    Tab,
  },
  setup(){
      const x=ref ('吃饭')
      return {
          x
      }
  }
};
</script>