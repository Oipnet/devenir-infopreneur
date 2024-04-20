<script setup lang="ts">

</script>

<template>
  <div class="font-roboto">
  <base-navbar />
    <UContainer>
      <slot />
    </UContainer>
    <footer class="bg-secondary text-malibu-50 text-center">
      ©2024 <nuxt-link to="https://forelse.info">Forelse</nuxt-link>
    </footer>
  </div>
</template>

<style scoped>

</style>