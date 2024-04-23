<script setup lang="ts">
import {useLastPosts} from "~/composables/blog/useLastPosts";
import PostCard from "~/components/blog/PostCard.vue";
import {useCountPosts} from "~/composables/blog/useCountPosts";
import type {Post} from "~/types/Post";

useHead({
  title: 'Devenir Infopreneur',
  meta: [
    {
      name: 'description',
      content: 'Plongez dans l’univers de l’infopreneuriat et découvrez comment transformer vos connaissances en business qui cartonne !'
    }
  ]

})

const state = reactive<{ data: Post[], postCount: number }>({
  data: [],
  postCount: 0
})

const { data } = await useAsyncData('posts', () => useLastPosts())
const { data: postCount } = await useAsyncData('posts-count', () => useCountPosts())

state.data = (data.value || [])
state.postCount = postCount.value || 0
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
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4" v-if="state.data">
        <post-card v-for="post in state.data" :key="post.slug" :post="post"/>
      </div>
    </section>
    <section>
      <div class="text-4xl text-center font-oswald">
        Retrouvez les {{ state.postCount }} articles sur le blog
      </div>
      <nuxt-link to="/blog" class="text-center block text-primary mt-8 mb-8">Voir tous les articles</nuxt-link>
    </section>
  </NuxtLayout>
</template>

<style scoped>

</style>