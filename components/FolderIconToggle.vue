<template>
  <folder-open-icon class="icon" v-show="!props.isOpen" />
  <folder-close-icon class="icon" v-show="props.isOpen" />
</template>

<script setup lang="ts">
const props = defineProps<{isOpen: boolean}>()
</script>

<style scoped>
  .icon{
    fill: #FFFFFF;
    width: 14px;
  }
</style>