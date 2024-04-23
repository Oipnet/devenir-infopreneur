<script setup lang="ts">

</script>

<template>
  <footer class="bg-secondary text-malibu-50">
    <UContainer :ui="{
      base: 'bg-malibu-200 text-malibu-900 py-8 px-4',
    }">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="flex flex-col">
          <h3 class="text-2xl font-oswald underline mb-4">Navigation</h3>
          <nuxt-link to="/blog">Blog</nuxt-link>
          <nuxt-link to="/contact">Contact</nuxt-link>
          <nuxt-link to="https://facebook.com/forelse" target="_blank">Facebook</nuxt-link>
        </div>
      </div>
    </UContainer>
    <div class="text-center">©2024 <nuxt-link to="https://forelse.info">Forelse</nuxt-link></div>
  </footer>
</template>

<style scoped>

</style>