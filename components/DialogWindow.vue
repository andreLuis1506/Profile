<template>
  <FolderButton @click="toggleWindow">Experiencias</FolderButton>
  <section id="window" v-show="isOpen">
    <BarWindow />
  </section>
</template>

<script setup lang="ts">
import BarWindow from "~/components/BarWindow.vue";

const isOpen = ref(false)

function toggleWindow(){
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
#window{
  position: absolute;
  top: 40%;
  left: 30%;
  z-index: 999;
}
</style>