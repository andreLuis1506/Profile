<template>
  <DialogWindow title="Experiências">
    <ExpItem v-bind="exp" />
  </DialogWindow>
</template>

<script setup lang="ts">
const exp = {
  title: 'Sisped',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
      '        Sed a ipsum consectetur, scelerisque nisi nec, dignissim nisi.\n' +
      '        Proin tincidunt auctor arcu, fermentum suscipit leo porta at. Suspendisse pretium ante non.' ,
  date: 'Fev/2018 - Atual',
  contributions: ['Desenvolvimento de novas funcionalidades', 'Manutenção de funcionalidades existentes', 'Correção de bugs'],
  technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL']
}
</script>

<style scoped>
#container::before {
  content: "";
  float: left;
  visibility: hidden;
  height: calc(50px * 3);
}
</style>