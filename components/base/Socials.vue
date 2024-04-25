<script setup lang="ts">
  import { useSocials } from "~/composables/useSocials";

  const socials = useSocials();
</script>

<template>
  <UCard
      :ui="{
          divide: 'divide-white',
          ring: 'ring-0',
          shadow: 'shadow-none',
          base: 'w-full sm:w-2/3',
          footer: {
            base: 'flex justify-center'
          }
      }">
    <h2 class="text-center text-2xl text-bold text-primary mb-8 font-dancing-script">Réseaux sociaux</h2>
    <div class="flex flex-col sm:flex-row gap-8 sm:gap-2">
      <base-social-item v-for="social in socials" :key="social.id" :social="social" :is-lite="false" />
    </div>
    <template #footer>
      <UButton variant="outline" color="primary" to="/contact" :ui="{ base: 'm-auto'}">Me contacter</UButton>
    </template>
  </UCard>
</template>

<style scoped>

</style>