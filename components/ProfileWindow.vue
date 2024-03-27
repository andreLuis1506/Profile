
<template>
  <DialogWindow title="Sobre mim">
    <template #activator="{isOpen}">
      <FolderIconToggle :is-open="isOpen" />
      Sobre mim
    </template>
    <div id="group-info">
      <h1 id="title">Desenvolvedor</h1>
      <p id="subtitle">Desenvolvedor Full Stack, apaixonado por tecnologia e inovação.</p>
    </div>
    <HomeIlustrator />
  </DialogWindow>
</template>

<script setup lang="ts">

import FolderIconToggle from "~/components/FolderIconToggle.vue";
</script>