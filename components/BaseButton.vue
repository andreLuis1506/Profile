<template>
  <button class="button">
    <slot>
      Lorem Ipsum
    </slot>
  </button>
</template>

<style>
  .button {
    background: rgb(75,145,247);
    background: linear-gradient(180deg, rgba(75,145,247,1) 0%, rgba(54,122,246,1) 100%);
    border: none;
    border-radius: 6px;
    color: white;
    padding: 4px 7px;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-width: 120px;
  }
</style>