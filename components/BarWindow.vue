<template>
  <div id="win-bar" @dblclick="maximizeWindow" :class="{'is-focused': props.isActive}">
    <div id="content-win-bar" :class="{'is-focused': props.isActive}" >
      <slot>
        Exemplo
      </slot>
    </div>
    <div id="bottom-win-bar">
      <button id="maximize-button" v-if="!props.disableMaximize" :class="{'is-focused': props.isActive}" @click="maximizeWindow"></button>
      <button id="close-button" :class="{'is-focused': props.isActive}" @click="closeWindow"></button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{isActive: boolean, disableMaximize: boolean}>()

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
  background: #F6F6F6;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  border-bottom: solid .3px rgba(0,0,0,0.1);
  transition: ease-out .1s;
}

#win-bar.is-focused{
  background: #FFFFFF;
}

#content-win-bar.is-focused{
  color: #3D3D3D;
  font-size: 12px;
}

#content-win-bar{
  color: rgba(60,60,67,0.6);
  font-size: 12px;
  transition: ease-out .1s;
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
  border: solid .5px rgba(0,0,0,0.1);
  border-radius: 50%;
  margin: 0 4px;
}

#close-button.is-focused{
  background: #ED6A5F;
}

#maximize-button.is-focused{
  background: #61C554;
}

#close-button, #maximize-button{
  background: #CECDCD;
  transition: ease-out .1s;
}

</style>