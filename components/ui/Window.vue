<template>
  <section id="window" v-show="props.isOpen">
    <UiWinBar />
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
}>()
</script>

<style scoped>
#window{
  position: absolute;
  top: 40%;
  left: 30%;
  z-index: 999;
}
</style>