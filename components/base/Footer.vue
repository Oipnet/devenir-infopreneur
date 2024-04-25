<script setup lang="ts">

</script>

<template>
  <footer class="bg-secondary text-malibu-50">
    <div class="bg-malibu-200 text-malibu-900 flex justify-center">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto mt-4 mb-4">
        <div class="flex flex-col">
          <h3 class="text-2xl font-oswald underline mb-4">Navigation</h3>
          <nuxt-link to="/blog">Parcourir notre Blog</nuxt-link>
          <nuxt-link to="/contact">Nous contacter</nuxt-link>
        </div>
        <div></div>
        <div class="flex flex-col">
          <h3 class="text-2xl font-oswald underline mb-4">Retrouvez nous sur les reseaux</h3>
          <base-socials-lite />
        </div>
      </div>
    </div>
    <div class="text-center">©2024 <nuxt-link to="https://forelse.info">Forelse</nuxt-link></div>
  </footer>
</template>

<style scoped>

</style>