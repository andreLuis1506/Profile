<template>
  <DialogWindow title="Experiências">
    <template #activator="{isOpen}">
      <FolderIconToggle :is-open="isOpen" />
      Experiências
    </template>
    <div class="with-sidebar">
      <side-bar>
        <ul>
          <li v-for="{title} in exp" :key="title" @click="setActiveExp(title)">
            {{ title }}
          </li>
        </ul>
      </side-bar>
      <div>
        <ExpItem v-for="x in exp" v-bind="x" :key="x.title" v-show="x.title === activeExp" />
      </div>
    </div>
  </DialogWindow>
</template>

<script setup lang="ts">
import expDb from '~/db/exp.json'
import FolderIconToggle from "~/components/FolderIconToggle.vue";

const exp = expDb.exp

const activeExp = ref(exp[0].title)

function setActiveExp(title: string){
  activeExp.value = title
}
</script>

<style scoped>
.with-sidebar > div:nth-child(2) {
  margin-left: 234px;
}

ul {
  li{
      position: relative;
  }
}
</style>