<template>
  <div id="pic">
  </div>
</template>

<style scoped>
#pic{
  background-image: url("https://media.licdn.com/dms/image/C4E03AQFh2TmKDhQsUg/profile-displayphoto-shrink_800_800/0/1586975053256?e=1717027200&v=beta&t=KnYdTZUyjTh9YfccqKIreNOtsVdVaLqN1Nb7VIxPtac");
  background-size: cover;
  margin: 20px 20px 20px 20px;
  height: 300px;
  width: 300px;
  box-shadow: -1px 1px 1px 1px rgba(75,145,247, 0.8);
  animation: bubble 10s infinite linear;
}

#pic:before{
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  z-index: 2;
  box-shadow: 1px -1px 1px 1px rgb(124, 114, 8, 0.8);
  animation: bubble 8s infinite linear;
}

#pic:after{
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  z-index: 2;
  box-shadow: 1px 1px 1px 1px white;
  animation: bubble 12s infinite linear;
}

@keyframes bubble  {
  0%, 100%{
    border-radius: 48% 40% 62% 47% / 61% 49% 64% 43%;
  }
  33%{
    border-radius: 40% 62% 47% 48% / 49% 64% 43% 61%;
  }
  66%{
    border-radius: 62% 47% 48% 40% / 64% 43% 61% 49%;
  }
}

</style>