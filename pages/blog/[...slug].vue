<template>
  <NuxtLayout>
    <article class="mb-8 blog-post">
      <h1 class="text-4xl font-oswald mb-8">{{ title }}</h1>
      <nuxt-img :src="image" alt="" class="float-none mb-4 w-full md:float-right md:w-[400px] rounded md:m-4" />
      <ContentRenderer :value="data" />
    </article>
  </NuxtLayout>
</template>
<script setup lang="ts">
const route = useRoute()
const slug: string = route.params.slug[0]

const { data } = await useAsyncData(slug, () => queryContent(`blog/${slug}`).findOne())
const title = data.value?.title
const image = data.value?.coverImage
</script>

<style>
.blog-post p, .blog-post li {
  @apply mb-4;
}

.blog-post strong {
  @apply font-bold underline;
}
</style>