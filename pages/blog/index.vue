<template>
  <NuxtLayout>
    <h1 class="text-4xl font-oswald mb-8">Blog</h1>
    <div class="flex flex-col md:flex-row flex-wrap gap-4" v-if="state.data">
      <post-card v-for="post in state.data" :key="post.slug" :post="post"/>
    </div>
    <UPagination v-model="page" :page-count="postPerPage" :total="state.postCount" class="mb-8"></UPagination>
  </NuxtLayout>
</template>
<script setup lang="ts">
  import type {Post} from "~/types/Post";
  import PostCard from "~/components/blog/PostCard.vue";

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