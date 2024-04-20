<script setup lang="ts">
  useHead({
    htmlAttrs: {
      lang: 'fr'
    },
    script: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2253458813738703',
        async: true,
        crossorigin: 'anonymous'
      }
    ]
  })
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