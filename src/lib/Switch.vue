<template>
  <button class="gulu-switch" @click="toggle" :class="{ 'gulu-checked': value }">
    <span></span>
  </button>
</template>
<script lang="ts" setup="props, context">
const props = defineProps<{ value: boolean }>()
const emit = defineEmits<{
  (e: 'update:value', visible: boolean): void;
}>()
const toggle = () => {
  emit("update:value", !props.value);
};
</script>

<style lang="scss">
@use "sass:math";
$h: 22px;
$h2: $h - 4px;

.gulu-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: math.div($h, 2);
  position: relative;

  >span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: math.div($h2, 2);
    transition: all 250ms;
  }

  &.gulu-checked {
    background: #1890ff;

    >span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    >span {
      width: $h2 + 4px;
    }
  }

  &.gulu-checked:active {
    >span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
