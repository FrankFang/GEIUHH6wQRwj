<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button @click="onClick"
      @focus="onClick"
      @mouseover="onClick"
    >你好</Button>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup(){
    const onClick = ()=>{
      console.log('hi')
    }
    return {onClick}
  }
};
</script>