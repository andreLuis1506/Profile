<template>
  <DialogWindow title="Sobre mim">
    <template #activator="{isOpen, toggleWindow}">
      <Shortcut title="Experiências" @click="toggleWindow" #icon>
        <UserFolder />
<!--        <FolderIconToggle :is-open="isOpen" />-->
      </Shortcut>
    </template>
    <div>
      <div class="content">
        <div>
          <h2>Opa! eai?</h2>
          <p>Iniciei em programação quando entrei no curso de <strong>Analise e desenvolvimento de sistemas</strong> no IFBA - Irecê em 2018</p>
          <p>De lá para cá eu estudei um pouco de tudo, mas me firmei no Front-end. Isso aconteceu quando demostrei interesse e preocupação com a experiencia do usuário, isso desdes meus primeiros algoritmos em C quando nem sabia o que era UI/UX. </p>
          <p>Meu TCC foi sobre como aplicar Design Centrado no Usuário como forma de trazer assertividade nas decisões de software em um time ágil.</p>
          <p>Me dediquei a estudar <strong>Vue</strong> e hoje trabalho com <strong>Nuxt</strong>, atualmente estou estudando principalmente sobre design patterns, meu objetivo é conseguir escrever código de qualidade, que me ajude a resolver problemas de forma rápida e sustentável </p>
        </div>
      </div>
      <h3>Isso é só um resumo!</h3>
      <p>Se quiser conversar é só entrar em contato: </p>
      <ul>
        <li> Email: alsss.ads@gmail.com </li>
        <li> <a href="https://www.linkedin.com/in/andr%C3%A9-luis-dos-santos" target="_blank"> Linkedin </a> </li>
        <li> <a href="https://github.com/andreLuis1506" target="_blank"> Github: </a> </li>
      </ul>
    </div>
  </DialogWindow>
</template>

<script setup lang="ts">
import FolderIconToggle from "~/components/FolderIconToggle.vue";
</script>

<style scoped>
  .content{
    display: flex;
    align-items: center;
    gap: 10px;
  }
</style>