<template>
<main>
  <initial-loading />
  <div id="content">
    <NavBar />
    <div id="group-info">
      <h1 id="title"> André L. Santos </h1>
      <p id="subtitle">O desenvolvedor que você precisa!</p>
      <div id="group-button">
        <ExpWindow  />
        <ProfileWindow  />
        <shortcut title="Blog (Em breve)">
          <template #icon>
            <BookFolder />
          </template>
        </shortcut>
        <shortcut title="Copiar Email">
          <template #icon>
            <EmailIcon />
          </template>
        </shortcut>
      </div>
    </div>
    <div>
      <profile-pic />
    </div>
  </div>
</main>
</template>

<style>
body{
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

main {
  //background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(150,144,145,1) 100%);
  background: url("/assets/Desktop - 1.svg") no-repeat center center fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

#content{
  position: absolute;
  top: 0;
  opacity: 1;
  font-family: "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

#group-info{
  height: 217px;
  margin-right: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#title{
  font-size: 48px;
  font-weight: 300;
  margin: 0;
  text-align: center;
}
#subtitle{
  text-align: center;
  font-size: 20px;
  width: 498px;
  font-weight: 300;
  color: #3D3D47;
  margin-top: 16px;
  margin-bottom: 28px;
}

#group-button{
  width: 498px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>

<script setup lang="ts">
import InitialLoading from "~/components/InitialLoading.vue";
import EnvelopeIcon from "~/components/EnvelopeIcon.vue";
import NavBar from "~/components/NavBar.vue";
import EmailIcon from "~/components/EmailIcon.vue";
</script>