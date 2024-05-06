<template>
  <div id="navbar">
    <div id="my-name">
      <CodeIcon height="12px" fill="#4186F7" border="" />
      André Luis dos Santos
    </div>
    <div id="clock"> {{ clock }} </div>
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
import CodeIcon from "~/components/CodeIcon.vue";

const clock = ref('00:00:00')

onBeforeMount(() => {
  setInterval(updateClock, 1000)
})

function updateClock(){
  const date = new Date()
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  clock.value = `${hours} : ${minutes} : ${seconds}`
}

</script>

<style>
#navbar{
  position: absolute;
  top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 28px);
  border-radius: 6px;
  padding: 4px;
  background: #FFFFFF;
  border: solid 1px rgba(0,0,0,0.1);

  div{
    width: 200px;
  }
}

#clock{
  font-size: 12px;
  color: #3D3D47;
  text-align: center;
  font-weight: bold;
}

#apps{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 6px;
  gap: 4px;

  a{
    height: 22px;
  }
}

#my-name{
  font-size: 12px;
  color: #3D3D47;
  font-weight: bold;
  margin-left: 6px;
  display: flex;
  gap: 6px;
  opacity: 0.7;
}
</style>