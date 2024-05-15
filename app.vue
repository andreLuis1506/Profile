<template>
  <Head>
    <Title>André L. Santos</Title>
  </Head>
  <main>
    <InitialLoading />
    <NotificationCopiedEmail />
    <div id="content">
      <NavBar />
      <div id="group-info">
        <ExpWindow  />
        <ProfileWindow  />
        <shortcut title="Blog (Em breve)">
          <template #icon>
            <BookFolder />
          </template>
        </shortcut>
        <CopyEmail />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import InitialLoading from "~/components/InitialLoading.vue";
import NavBar from "~/components/NavBar.vue";
import NotificationCopiedEmail from "~/components/NotificationCopiedEmail.vue";
</script>

<style>
body{
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

main {
  //background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(150,144,145,1) 100%);
  background: url("/Desktop - 1.svg") no-repeat center center fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

#content{
  opacity: 1;
  font-family: "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: 0 10px 0 10px;
}

#group-info{
  margin-top: 60px;
  margin-right: 30px;
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
</style>