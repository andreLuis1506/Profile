<template>
  <DialogWindow title="Experiências">
    <ExpItem v-for="x in exp" v-bind="x" :key="x.title" />
  </DialogWindow>
</template>

<script setup lang="ts">
import expDb from '~/db/exp.json'

const exp = expDb.exp
</script>