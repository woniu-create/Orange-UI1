<template>
  <h1>Tabs示例</h1>
<Demo :component="Tabs1Demo"></Demo>
</template>
<script lang="ts">
import Demo from './Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'
import { ref } from 'vue';
export default {
  components: {
    Demo
  },
  setup(){
      const x=ref ('导航1')
      return {
        Demo,
        Tabs1Demo
      }
  }
};
</script>
