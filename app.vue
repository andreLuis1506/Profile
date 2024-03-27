<template>
<main>
  <div id="background-glass">
  </div>
  <div id="content">
    <div id="group-info">
      <h1 id="title">Hello, World!</h1>
      <p id="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at nisi massa. Mauris convallis dui at felis maximus tincidunt. Etiam.</p>
      <div id="group-button">
        <ExpWindow  />
        <ProfileWindow  />
        <FolderButton  >
          Blog (em breve)
        </FolderButton>
        <FolderButton  >
          Download CV
        </FolderButton>
      </div>
    </div>
    <div>
      <HomeIlustrator width="495.86" height="466.92" />
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
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(150,144,145,1) 100%);
  height: 100vh;
  width: 100vw;
}

#background-glass{
  background: #FFFFFF;
  height: 100%;
  width: 100%;
  opacity: 0.35;
}

#content{
  z-index: 999;
  position: absolute;
  top: 0;
  opacity: 1;
  font-family: "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

#group-info{
  height: 217px;
  width: 498px;
  margin-right: 22px;
}

#title{
  font-size: 58px;
  font-weight: 300;
  margin: 0;
}
#subtitle{
  font-size: 14px;
  font-weight: 300;
  color: #3D3D47;
  margin: 28px 0;
}

#group-button{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //margin-top: 40px;
}
</style>
