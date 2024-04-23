<template>
  <NuxtLayout>
    <h1 class="text-4xl font-oswald">Blog</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 mt-8">
      <article v-for="post in state.data" :key="post.slug" class="bg-white p-4 rounded shadow">
        <nuxt-link :to="`/blog/${post.slug}`">
          <nuxt-img :src="post.coverImage" alt="" class="w-full rounded" />
          <h2 class="text-xl font-oswald mt-4">{{ post.title }}</h2>
          <ContentRendererMarkdown :value="post.excerpt" />
        </nuxt-link>
      </article>
    </div>
    <UPagination v-model="page" :page-count="postPerPage" :total="state.postCount" class="mb-8"></UPagination>
  </NuxtLayout>
</template>
<script setup lang="ts">
  import type {Post} from "~/types/Post";

  const postPerPage = 10;
  const route = useRoute()
  const page = ref(parseInt(route.params.page as string) || 1)
  const state = reactive<{ data: Post[], postCount: number }>({
    data: [],
    postCount: 0
  })

  const { data } = await useAsyncData('posts', () => queryContent('blog').limit(page.value * postPerPage).find())
  const { data: postCount } = await useAsyncData('posts-count', () => queryContent('blog').count())

  state.data = (data.value || []) as unknown as Post[]
  state.postCount = postCount.value || 0

  watch(page, async (newPage) => {
    const { data } = await useAsyncData('posts', () => queryContent('blog')
        .skip(newPage * postPerPage - 1)
        .limit(newPage * postPerPage)
        .find()
    )
    state.data = (data.value || []) as unknown as Post[]
  })
</script>