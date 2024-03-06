<template>
  <div id="frame">
    <slot>
      conteudo
    </slot>
  </div>
</template>

<style>
  #frame{
    max-width: 100%;
    height: 100%;
    background: #FFFFFF;
    border-radius: 0 0 10px 10px;
    padding: 10px;
  }
</style>