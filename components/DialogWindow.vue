<template>
  <slot name="activator" :isOpen="isOpen" :toggleWindow="toggleWindow">
    <BaseButton @click="toggleWindow">
      {{props.title}}
    </BaseButton>
  </slot>
  <section
      v-if="isOpen"
      id="window"
      ref="windowEl"
      v-click-outside="removeFocus"
      :class="{'is-focused': isOnfocus}"
      @click="setFocus"
      @mousedown="drag"
  >
    <BarWindow
        :is-active="isOnfocus"
        @window:close="toggleWindow"
        @window:maximize="toggleMaximize"
    >
      {{props.title}}
    </BarWindow>
    <WindowFrame :is-focused="isOnfocus">
      <slot>
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
  isOnfocus.value = isOpen.value = !isOpen.value
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

const isDrag = ref(false)
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
  isDrag.value = false
}

function elementDrag(event: MouseEvent) {
  event.preventDefault()

  isDrag.value = true

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

const transitionTime = computed(() => isDrag.value || !isOnfocus.value ? '0' : '.3s')

const isOnfocus = ref(true)
function setFocus(){
  if(!isOnfocus.value) isOnfocus.value = true
}
function removeFocus(){
  if(isOnfocus.value) isOnfocus.value = false
}
</script>

<style scoped>
#window{
  position: absolute;
  top: v-bind(windowPositionTop);
  left: v-bind(windowPositionLeft);
  width: v-bind(windowWidth);
  height: v-bind(windowHeight);
  z-index: 10;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
  transition: ease-in-out v-bind(transitionTime);
  border-radius: 10px;
}

#window.is-focused{
  z-index: 1000;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.30);
}
</style>