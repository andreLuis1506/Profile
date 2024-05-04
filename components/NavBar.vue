<template>
  <div id="navbar">
    <div id="clock">12:00:00</div>
    <div id="apps">
      <a href="https://github.com/andreLuis1506" target="_blank">
        <GithubIcon height="22px" fill="#7685BF" />
      </a>
      <a href="https://linkedin.com/in/andré-luis-dos-santos" target="_blank">
        <LinkedinIcon height="22px" fill="#44A6EB" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import LinkedinIcon from "~/components/LinkedinIcon.vue";
</script>

<style>
#navbar{
  position: absolute;
  top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100vw - 22px);
  border-radius: 6px;
  padding: 4px;
  background: #FFFFFF;
  border: solid 1px rgba(0,0,0,0.1);
}

#clock{
  width: 100px;
  font-size: 12px;
  color: #3D3D47;
  position: relative;
  left: calc(50% - 50px);
  text-align: center;
}

#apps{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100px;

  a{
    margin-left: 4px;
    height: 22px;
  }
}
</style>