<template>
  <folder-open-icon class="icon-close" v-show="!props.isOpen" />
  <folder-close-icon class="icon-open" v-show="props.isOpen" />
</template>

<script setup lang="ts">
const props = defineProps<{isOpen: boolean}>()
</script>

<style scoped>
  .icon-open{
    fill: #3C3C43;
    width: 65px;
  }
  .icon-close{
    fill: #3C3C43;
    width: 58px;
  }
</style>