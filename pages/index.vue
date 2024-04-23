<script setup lang="ts">
import {useLastPosts} from "~/composables/useLastPosts";
import PostCard from "~/components/blog/PostCard.vue";

const posts = await useLastPosts()
</script>

<template>
  <NuxtLayout>
    <header class="flex flex-col md:flex-row pt-10">
      <div class="w-full md:w-1/2 md:mt-32">
        <h1 class="font-oswald text-primary text-4xl uppercase mb-12">Devenir Infopreneur</h1>
        <p>Plongez dans l’univers de l’infopreneuriat et découvrez comment transformer vos connaissances en business qui
          cartonne !</p>
      </div>
      <NuxtImg
          src="/images/devenir-infopreneur.jpeg"
          sizes="100vw sm:50vw md:400px"
          class="rounded-full"
      />
    </header>
    <section>
      <h2 class="text-primary text-2xl font-oswald mt-12 mb-8">Les derniers articles publiés</h2>
      <div class="flex flex-col md:flex-row flex-wrap gap-4" v-if="posts">
        <post-card v-for="post in posts" :key="post.slug" :post="post"/>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped>

</style>