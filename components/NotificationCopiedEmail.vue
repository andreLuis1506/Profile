<template>
  <transition>
    <div v-show="showCopiedEmail" id="notification">
      <CheckedIcon height="22px" fill="#1C1C1B" />
      <p> Email copiado!</p>
    </div>
  </transition>
</template>

<script setup lang="ts">

import {useShowCopiedEmail} from "~/composable/states";
import CheckedIcon from "~/components/CheckedIcon.vue";

const showCopiedEmail = useShowCopiedEmail()

watch(showCopiedEmail, (value) => {
  if (value)
    setTimeout(() => {
      showCopiedEmail.value = false
    }, 2000)
})

</script>

<style scoped>

#notification{
  height: 60px;
  width: 200px;
  position: absolute;
  top: 48px;
  right: 10px;
  z-index: 9999;
  border-radius: 6px 6px 6px 6px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px 0 10px;
  filter: blur(0.5px);
  transition: all 0.3s;

  background: rgba( 110, 255, 150, 0.25 );
  //background:  rgba( 255, 255, 255, 0.75 );
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );
  border: solid .5px rgba(0,0,0,0.1);


  p{
    color: #1C1C1B;
    font-size: 18px;
    margin: 0;
    margin-left: 4px;
  }
}

.v-enter-to, .v-leave-from {
  opacity: 1;
  right: 10px;
}

.v-enter-active,
.v-leave-active {
  right: 10px;
  opacity: 1;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  right: -40px !important;
}
</style>