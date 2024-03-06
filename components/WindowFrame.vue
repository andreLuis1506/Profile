<template>
  <div id="frame">
    <div id="container" style="height: 400px; overflow: auto;">
    <slot>
      conteúdo
    </slot>
    </div>
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

  #container::before {
    content: "";
    float: left;
    visibility: hidden;
    height: calc(50px * 3);
  }
</style>