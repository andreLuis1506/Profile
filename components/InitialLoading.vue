<template>
  <div id="loading-background">
<!--    <DotLottieVue-->
<!--        :data="hello"-->
<!--        style="width: 300px; height: 300px;"-->
<!--        autoplay-->
<!--        :speed="2"-->
<!--        :useFrameInterpolation="false"-->
<!--    ></DotLottieVue>-->
  </div>
</template>

<script setup>
// import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
// import * as hello from '@/assets/animations/hello.json'
</script>

<style>
#loading-background{
  background: #DEDCDD;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1001;
  pointer-events: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: hello 0.5s linear forwards 3.5s;
}

@keyframes  hello {
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}

</style>
