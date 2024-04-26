<template>
  <div id="sidebar">
    <div id="content">

    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
#sidebar{
  position: absolute;
  top: 0;
  left: 0;
  width: calc(234px - 20px);
  background-color: #E1E1E0;
  height: calc(100%);
  border-radius: 10px 0 0 10px;
  padding: 29px 10px 10px 12px;
  margin-right: 10px;
}

#content{
}
</style>