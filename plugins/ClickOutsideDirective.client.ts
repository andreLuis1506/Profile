export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('clickOutside', {
    mounted(el, binding, vnode) {
      el.clickOutsideEvent = (event: any) => {
        el.fistTime = el.fistTime + 1
        if (
          !(el === event.target || el.contains(event.target)) &&
          el.fistTime > 0
        ) {
          binding.value(event)
        }
      }
      document.addEventListener('click', el.clickOutsideEvent)
      el.fistTime = -1
    },
    unmounted(el) {
      document.removeEventListener('click', el.clickOutsideEvent)
    },
  })
})