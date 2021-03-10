<demo>
支持size
</demo>
<template>
  <div>
    <div>
      <Button size="big">我超大</Button>
      <Button>我一般</Button>
      <Button size="small">我超小</Button>
    </div>
    <div>
      <Button theme="link" size="big">我超大</Button>
      <Button theme="link">我一般</Button>
      <Button size="small" theme="link">我超小</Button>
    </div>
    <div>
      <Button size="big" theme="text">我超大</Button>
      <Button theme="text">我一般</Button>
      <Button size="small" theme="text">我超小</Button>
    </div>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
