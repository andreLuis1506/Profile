<template>
  <div id="frame">
    <div id="container">
    <slot>
      conteúdo
    </slot>
    </div>
  </div>
</template>

<style scoped>
  #frame{
    max-width: 100%;
    height: 100%;
    background: #FFFFFF;
    border-radius: 0 0 10px 10px;
    padding: 0 0 10px 10px;
  }

  #container{
    width: 100%;
    height: 100%;
    overflow: auto;
    padding-top: 5px;
  }
</style>