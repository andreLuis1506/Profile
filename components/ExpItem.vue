<template>
  <div id="exp-item-container">
    <div id="first-line">
      <h2>
        {{props.title}}
      </h2>
      <span>
        {{props.date}}
      </span>
    </div>
    <p id="description">
      {{props.description}}
    </p>
    <h3>
      Contribuições:
    </h3>
    <ul>
      <li v-for="contribution in props.contributions" :key="contribution">
        {{contribution}}
      </li>
    </ul>
    <h3>
      Tecnologias:
    </h3>
    <ul>
      <li v-for="technology in props.technologies" :key="technology">
        {{technology}}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string,
  date: string,
  description: string,
  contributions: string[],
  technologies: string[]
}>()
</script>

<style scoped>
h2{
  margin: 0;
}

#exp-item-container{
  margin: 0 15px 0 0;
  max-width: 800px;
}

#first-line{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#description{
  color: #898989;
  font-size: 14px;
}


</style>