<template>
  <shortcut title="Copiar Email" @click="copyEmail">
    <template #icon>
      <EmailIcon />
    </template>
  </shortcut>
</template>

<script setup lang="ts">
import EmailIcon from "~/components/EmailIcon.vue";
import {useCopyEmail} from "~/composable/useCopyEmail";

const { copyEmail } = useCopyEmail()

</script>
