<template>
  <div id="frame">
    <div id="container">
    <slot>
      conteúdo
    </slot>
    </div>
  </div>
    <div id="overlay" v-show="!props.isFocused"></div>
</template>

<script setup lang="ts">
const props = defineProps<{isFocused: boolean}>()
</script>

<style scoped>
  #frame{
    max-width: 100%;
    height: 100%;
    background: #F6F6F6;
    border-radius: 0 0 10px 10px;
    padding: 0 0 10px 10px;
  }

  #container{
    width: 100%;
    height: 100%;
    overflow: auto;
    padding-top: 5px;
  }

  #overlay{
    position: absolute;
    top:28px;
    left: 0;
    width: 100%;
    border-radius: 0 0 10px 10px;
    height: calc(100% + 10px);
    background: rgba(232,232,231,0.5);
    z-index: 1;
    transition: ease-in-out .1s;
  }
</style>