<script setup lang="ts">
import {useLastPosts} from "~/composables/useLastPosts";

const posts = await useLastPosts()
</script>

<template>
  <header class="flex flex-col md:flex-row pt-10">
    <div class="w-full md:w-1/2 md:mt-32">
      <h1 class="font-oswald text-primary text-4xl uppercase mb-12">Devenir Infopreneur</h1>
      <p>Plongez dans l’univers de l’infopreneuriat et découvrez comment transformer vos connaissances en business qui cartonne !</p>
    </div>
    <NuxtImg
      src="/images/devenir-infopreneur.jpeg"
      sizes="100vw sm:50vw md:400px"
      class="rounded-full"
    />
  </header>
  <section>
    <h2 class="text-primary text-2xl font-oswald mt-12 mb-8">Les derniers articles publiés</h2>
    <div class="flex flex-row gap-4" v-if="posts">
      <UCard v-for="post in posts" :ui="{
        base: 'w-full md:w-1/3 mb-8',
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
          <p>{{ post.excerpt }}</p>
        </template>
        <template #footer>
          <div class="flex flex-row justify-end">
            <UButton variant="outline" :to="`/blog/${post.slug}`" class="text-primary text-right inline-block">Lire la suite</UButton>
          </div>
        </template>
      </UCard>
    </div>
  </section>
</template>

<style scoped>

</style>