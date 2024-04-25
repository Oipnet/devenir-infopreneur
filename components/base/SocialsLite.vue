<script setup lang="ts">
  import { useSocials } from "~/composables/useSocials";

  const socials = useSocials();
</script>

<template>
  <div class="flex flex-row justify-start mt-4 mb-4 sm:flex-row gap-8 sm:gap-2">
    <base-social-item v-for="social in socials" :key="social.id" :social="social" :is-lite="true"/>
  </div>
</template>

<style scoped>

</style>