<script setup lang="ts">
  import {useRouter} from "vue-router";

  const router = useRouter()

  const { social } = defineProps(['social', 'isLite']);
</script>

<template>
  <div v-if="!isLite" class="flex flex-row w-full sm:w-1/2 hover:scale-105 hover:cursor-pointer transition ease-in-out"  @click.prevent="navigateTo(social.url, {
    open: {
      target: '_blank'
    }
  })">
    <nuxt-img :src="social.icon" :alt="social.name" width="64px" height="64px" loading="lazy" preload></nuxt-img>
    <div class="flex flex-col ml-2">
      <nuxt-link :to="social.url" target="_blank" class="text-right">{{ social.name }}</nuxt-link>
      <span class="text-right text-xs text-secondary">{{ social.followers }}</span>
    </div>
  </div>
  <nuxt-img v-if="isLite"
            class="inline-block mr-4 hover:cursor-pointer"
            :src="social.icon" :alt="social.name"
            width="24px" height="24px" loading="lazy" preload
            @click.prevent="navigateTo(social.url, {
              open: {
                target: '_blank'
              }
            })"
  ></nuxt-img>
</template>

<style scoped>

</style>