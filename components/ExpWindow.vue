<template>
  <DialogWindow title="Experiências">
    <template #activator="{isOpen, toggleWindow}">
      <Shortcut title="Experiências" @click="toggleWindow" #icon>
        <CodeFolder />
      </Shortcut>
    </template>
    <div class="with-sidebar">
      <SideBar>
        <span id="exp-section">Front-end</span>
        <ul>
          <li v-for="{title} in exp" :key="title" @click="setActiveExp(title)">
            <div :class="{selected: title === activeExp}">
              <FileLinesIcon class="icon"/>
              <span>
                {{ title }}
              </span>
            </div>
          </li>
        </ul>
      </SideBar>
      <div>
        <ExpItem v-for="x in exp" v-bind="x" :key="x.title" v-show="x.title === activeExp" />
      </div>
    </div>
  </DialogWindow>
</template>

<script setup lang="ts">
import expDb from '~/db/exp.json'
import FolderIconToggle from "~/components/FolderIconToggle.vue";
import FileLinesIcon from "~/components/FileLinesIcon.vue";
import CodeFolder from "~/components/CodeFolder.vue";

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

#exp-section{
  font-size: 11px;
  font-weight: bold;
  color: #3C3C43;
  opacity: 40%;
}

ul {
  list-style-type: none;
  padding: 0 0 0 10px;
  margin-top: 10px;

  li{
    position: relative;
    cursor: pointer;

    div{
      padding: 10px;
      margin-bottom: 5px;
      border-radius: 6px;
      transition: 0.6s;
      border: solid .5px transparent;
      font-size: 14px;
      display: flex;
      align-items: center;
      color: #434343;

      span{
        margin-left: 8px;
      }
    }
  }
}

.selected{
  border: solid 1px #4B91F7 !important;
}

.icon{
  fill: #4B91F7;
  width: 14px;
}
</style>