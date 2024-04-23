<template>
  <NuxtLayout>
    <h1 class="text-4xl font-oswald mb-8">Blog</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4" v-if="state.data">
      <post-card v-for="post in state.data" :key="post.slug" :post="post"/>
    </div>
    <UPagination v-model="page" :page-count="postPerPage" :total="state.postCount" class="mb-8"></UPagination>
  </NuxtLayout>
</template>
<script setup lang="ts">
  import type {Post} from "~/types/Post";
  import PostCard from "~/components/blog/PostCard.vue";
  import {usePaginatePosts} from "~/composables/blog/usePaginatePosts";
  import {useCountPosts} from "~/composables/blog/useCountPosts";

  const postPerPage = 10;
  const route = useRoute()
  const page = ref(parseInt(route.params.page as string) || 1)
  const state = reactive<{ data: Post[], postCount: number }>({
    data: [],
    postCount: 0
  })

  const { data } = await useAsyncData('posts', () => usePaginatePosts(page.value, postPerPage))
  const { data: postCount } = await useAsyncData('posts-count', () => useCountPosts())

  state.data = (data.value || [])
  state.postCount = postCount.value || 0

  watch(page, async (newPage) => {
    const { data } = await useAsyncData('posts', () => usePaginatePosts(newPage, postPerPage, newPage * postPerPage - 1)
    )

    state.data = (data.value || [])
  })
</script>