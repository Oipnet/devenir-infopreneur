<script setup lang="ts">
import type {Post} from "~/types/Post";

const props = defineProps<{
  post: Post
}>()
</script>

<template>
  <UCard :ui="{
          base: 'w-full mb-8',
          header: {
            base: 'rounded-t-lg',
            padding: 'p-0 sm:p-0'
          },
          body: {
            padding: 'p-2'
          }
        }">
    <template #header>
      <NuxtLink :to="`/blog/${post.slug}`" class="block">
        <NuxtImg
            v-if="post.coverImage"
            :src="post.coverImage"
            :alt="post.title"
            class="rounded-t-lg w-full h-[200px] object-cover"
            sizes="200px"
        />
      </NuxtLink>
      <div class="flex flex-row flex-wrap gap-2 mx-2 my-2">
        <UBadge v-for="tag in post.tags" variant="outline">{{ tag }}</UBadge>
      </div>
    </template>
    <template #default>
      <NuxtLink :to="`/blog/${post.slug}`" class="mb-4 inline-block font-oswald font-bold">
        <h3 class="text-primary text-xl">{{ post.title }}</h3>
      </NuxtLink>
      <ContentRendererMarkdown :value="post.excerpt" v-if="post.excerpt"/>
    </template>
    <template #footer>
      <div class="flex flex-row justify-end">
        <UButton variant="outline" :to="`/blog/${post.slug}`" class="text-primary text-right inline-block">Lire la
          suite
        </UButton>
      </div>
    </template>
  </UCard>
</template>

<style scoped>

</style>