<template>
  <FolderButton @click="toggleWindow">{{props.title}}</FolderButton>
  <section ref="windowEl" id="window" v-show="isOpen">
    <BarWindow
        @window:close="toggleWindow"
        @window:maximize="toggleMaximize"
        @mousedown="drag"
    >
      {{props.title}}
    </BarWindow>
    <WindowFrame >
      <slot>
        Conteúdo da janela
      </slot>
    </WindowFrame>
  </section>
</template>

<script setup lang="ts">

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

const isMaximized = ref(false)
function toggleMaximize(){
  isMaximized.value = !isMaximized.value
  maximizeWindow()
}

const windowWidth = ref('800px')
const windowHeight = ref('400px')
const windowPositionTop = ref('40%')
const windowPositionLeft = ref('30%')
function maximizeWindow() {
  windowWidth.value = isMaximized.value ? '100%' : '800px'
  windowHeight.value = isMaximized.value ? '100%' : '400px'
  windowPositionTop.value = isMaximized.value ? '0px' : '40%'
  windowPositionLeft.value = isMaximized.value ? '0px' : '30%'
}

const clientX: any = ref(undefined)
const clientY: any = ref(undefined)
const movementX =  ref(0)
const movementY = ref(0)
const windowEl: any = ref(null)
function drag(event: MouseEvent){
  if (isMaximized.value) return
  event.preventDefault()
  clientX.value = event.clientX
  clientY.value = event.clientY
  document.onmousemove = elementDrag
  document.onmouseup = closeDragElement
}

function closeDragElement () {
  document.onmouseup = null
  document.onmousemove = null
}

function elementDrag(event: MouseEvent) {
  event.preventDefault()
  movementX.value = clientX.value - event.clientX
  movementY.value = clientY.value - event.clientY
  clientX.value = event.clientX
  clientY.value = event.clientY

  let  top
  let  left

  if(windowEl.value.offsetTop - movementY.value > window.innerHeight - 400) top = window.innerHeight - 400
  else if(windowEl.value.offsetTop - movementY.value < 0) top = 0
  else top = windowEl.value.offsetTop - movementY.value

  if(windowEl.value.offsetLeft - movementX.value > window.innerWidth - 800) left = window.innerWidth - 800
  else if(windowEl.value.offsetLeft - movementX.value < 0) left = 0
  else left = windowEl.value.offsetLeft - movementX.value

  windowPositionTop.value = (top) + 'px'
  windowPositionLeft.value = (left) + 'px'
}

</script>

<style scoped>
#window{
  position: absolute;
  top: v-bind(windowPositionTop);
  left: v-bind(windowPositionLeft);
  width: v-bind(windowWidth);
  height: v-bind(windowHeight);
  z-index: 999;
  box-shadow: 0px 25px 80px rgba(0, 0, 0, 0.15);
}
</style>