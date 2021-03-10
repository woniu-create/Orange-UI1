<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
  </div>
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
          <td class="z-attr-title td">value</td>
          <td class="z-attr-title td">是否选中</td>
          <td class="z-attr-title td">Boolean</td>
          <td class="z-attr-title td">false/true</td>
          <td class="z-attr-title td">false</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Demo from "./Demo.vue";
import { ref } from "vue";
export default {
  components: {
    Button,
    Demo,
  },
  setup() {
    const bool = ref(false);
    return {
      Switch1Demo,
      Switch2Demo,
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
