<template>
  <DialogWindow title="Experiências">
    <template #activator="{isOpen}">
      <FolderIconToggle :is-open="isOpen" />
      Experiências
    </template>
    <ExpItem v-for="x in exp" v-bind="x" :key="x.title" />
  </DialogWindow>
</template>

<script setup lang="ts">
import expDb from '~/db/exp.json'
import FolderIconToggle from "~/components/FolderIconToggle.vue";

const exp = expDb.exp
</script>