<template>
  <h1>Dialog示例</h1>
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
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
          <td class="z-attr-title td">visible</td>
          <td class="z-attr-title td">是否展示</td>
          <td class="z-attr-title td">Boolean</td>
          <td class="z-attr-title td">false/true</td>
          <td class="z-attr-title td">normal</td>
        </tr>
        <tr>
          <td class="z-attr-title td">ok</td>
          <td class="z-attr-title td">确认触发函数</td>
          <td class="z-attr-title td">function</td>
          <td class="z-attr-title td">()=>{}</td>
          <td class="z-attr-title td">--</td>
        </tr>
        <tr>
          <td class="z-attr-title td">cancel</td>
          <td class="z-attr-title td">取消触发函数</td>
          <td class="z-attr-title td">function</td>
          <td class="z-attr-title td">()=>{}</td>
          <td class="z-attr-title td">--</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import Demo from "./Demo.vue";
import Dialog1Demo from "./Dialog1.demo.vue";
import Dialog2Demo from "./Dialog2.demo.vue";

export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Demo,
      Dialog1Demo,
      Dialog2Demo,
    };
  },
};
</script>
<style scoped></style>
