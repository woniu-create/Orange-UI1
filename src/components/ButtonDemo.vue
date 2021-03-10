<template>
  <h1>Button示例</h1>
  <!-- <Demo :component="Button1Demo" /> -->
  <Demo :component="Button2Demo" />
  <Demo :component="Button3Demo" />
  <Demo :component="Button4Demo" />
  <Demo :component="Button5Demo" />
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
          <td class="z-attr-title td">size</td>
          <td class="z-attr-title td">尺寸大小</td>
          <td class="z-attr-title td">string</td>
          <td class="z-attr-title td">big/small/normal</td>
          <td class="z-attr-title td">normal</td>
        </tr>
        <tr>
          <td class="z-attr-title td">level</td>
          <td class="z-attr-title td">按钮颜色</td>
          <td class="z-attr-title td">string</td>
          <td class="z-attr-title td">main/danger</td>
          <td class="z-attr-title td">default</td>
        </tr>
        <tr>
          <td class="z-attr-title td">disabled</td>
          <td class="z-attr-title td">禁用按钮</td>
          <td class="z-attr-title td">string</td>
          <td class="z-attr-title td">disabled</td>
          <td class="z-attr-title td">disabled</td>
        </tr>
        <tr>
          <td class="z-attr-title td">loading</td>
          <td class="z-attr-title td">加载按钮</td>
          <td class="z-attr-title td">boolean</td>
          <td class="z-attr-title td">true/false</td>
          <td class="z-attr-title td">false</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
import Demo from "../components/Demo.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
export default {
  components: { Button, Demo },
  setup() {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
    };
  },
};
</script>
