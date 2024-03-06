<template>
  <FolderButton @click="toggleWindow">{{props.title}}</FolderButton>
  <section id="window" v-show="isOpen">
    <BarWindow >{{props.title}}</BarWindow>
    <WindowFrame >
      <slot>
        Conteudo da janela
      </slot>
    </WindowFrame>
  </section>
</template>

<script setup lang="ts">
import BarWindow from "~/components/BarWindow.vue";

const props = defineProps({
  title: {
    type: String,
    default: "Exemplo",
  },
});


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
  width: 800px;
  height: 400px;
}
</style>