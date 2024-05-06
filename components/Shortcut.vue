<template>
  <div id="shortcut">
    <span>
      <slot name="icon"></slot>
    </span>
    <span>{{props.title}}</span>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{title: string}>()
</script>

<style scoped>
#shortcut{
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;
  margin: 10px 0 10px 0;
}
</style>