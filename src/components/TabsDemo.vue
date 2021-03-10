<template>
  <h1>Tabs示例</h1>
<Demo :component="Tabs1Demo"></Demo>
<div class="z-attr">
    <h2>Attributes</h2>
    <table attr-table>
      <thead>
        <tr>
          <th class="z-attr-title">参数</th>
          <th class="z-attr-title">说明</th>
          <th class="z-attr-title">类型</th>
          <th class="z-attr-title">可选值</th>
          <th class="z-attr-title">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="z-attr-title td">Tab</td>
          <td class="z-attr-title td">Tab组件</td>
          <td class="z-attr-title td">component</td>
          <td class="z-attr-title td">Tab</td>
          <td class="z-attr-title td">Tab</td>
        </tr>
      </tbody>
    </table>
  </div>
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
