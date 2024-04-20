<script setup lang="ts">
import {useLinks} from "~/composables/useLinks";

const viewport = useViewport()
const links = useLinks()
const isOpen = ref(false)
const router = useRouter()

const handleNavigate = (_) => {
  isOpen.value = false
}
</script>

<template>
  <div v-if="viewport.isGreaterThan('mobileWide')">
    <UHorizontalNavigation :links="links" class="justify-end" :ui="{
      base: 'justify-end',
      after: 'after:h-0',
      active: 'border-b border-primary dark:bg-primary-400 rounded-none',
    }"/>
  </div>
  <div v-if="! viewport.isGreaterThan('mobileWide')">
    <UButton @click="isOpen = !isOpen" variant="outline" :ui="{
base: 'm-4'
    }" aria-label="Ouvrir le menu">
      <div class="space-y-2">
        <div class="w-8 h-0.5 bg-primary"></div>
        <div class="w-8 h-0.5 bg-primary"></div>
        <div class="w-8 h-0.5 bg-primary"></div>
      </div>
    </UButton>
    <USlideover v-model="isOpen">
      <div class="p-4 flex-1">
        <UButton @click="isOpen = !isOpen" variant="outline" aria-label="Fermer le menu" :ui="{
base: 'm-4 position-absolute top-0 left-0'
    }">
          X
        </UButton>
        <ul>
          <li v-for="link in links" class="m-auto text-center">
            <nuxt-link :to="link.to" class="text-primary text-center m-4 inline-block " @click="handleNavigate">{{ link.label }}</nuxt-link>
          </li>
        </ul>
      </div>
    </USlideover>
  </div>
</template>