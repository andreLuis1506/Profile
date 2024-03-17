<template>
  <div id="win-bar">
    <div id="content-win-bar">
      <slot>
        Exemplo
      </slot>
    </div>
    <div id="bottom-win-bar">
      <button id="maximize-button" @click="maximizeWindow"></button>
      <button id="close-button" @click="closeWindow"></button>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits({
  'window:close': null,
  'window:maximize': null
})

function closeWindow(){
  emit('window:close')
}

function maximizeWindow(event: MouseEvent){
  event.stopPropagation()
  emit('window:maximize')
}

</script>

<style>
#win-bar{
  height: 28px;
  width: 100%;
  background: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  border-bottom: solid .3px rgba(0,0,0,0.1);
}

#content-win-bar{
  color: #3D3D3D;
  font-size: 12px;
}

#bottom-win-bar{
  position: absolute;
  right: 8px;
  top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#bottom-win-bar button{
  height: 12px;
  width: 12px;
  border: none;
  border-radius: 50%;
  margin: 0 4px;
}

#close-button{
  background: #ED6A5F;
}

#maximize-button{
  background: #F5BF4F;
}

</style>