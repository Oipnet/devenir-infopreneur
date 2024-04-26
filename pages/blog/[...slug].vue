<template>
  <NuxtLayout>
    <article class="mb-8 blog-post">
      <h1 class="text-4xl font-oswald mt-8 mb-2">{{ title }}</h1>
      <h2 class="text-xl font-oswald text-primary mb-2">{{ subTitle }}</h2>
      <div class="mb-8 flex flex-row justify-between mr-12">
        <span class="text-primary text-xs inline-block self-center">Publié le : <NuxtTime :datetime="date" /></span>
        <SocialShare network="facebook"/>
      </div>
      <nuxt-img :src="image" alt="" class="float-none mb-4 w-full md:float-right md:w-[400px] rounded md:m-4" v-if="image"/>
      <ContentRenderer :value="data" />
    </article>
    <div class="text-right mb-8">
      <nuxt-link :to="previous" class="text-primary mr-4" v-if="previous">Précedent</nuxt-link>
      <nuxt-link :to="next" class="text-primary" v-if="next">Suivant</nuxt-link>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
const route = useRoute()
const slug: string = route.params.slug[0]

const { data } = await useAsyncData(slug, () => queryContent(`blog/${slug}`).findOne())
const title = data.value?.title
const subTitle = data.value?.subTitle
const image = data.value?.coverImage
const next = data.value?.next
const previous = data.value?.previous
const description: string = data.value?.description || ''
const date = data.value?.date
useHead({
  title: `Devenir Infopreneur - ${title}`,
  meta: [
    {
      name: 'description',
      content: description
    }
  ]

})

</script>

<style>
.blog-post p, .blog-post li {
  @apply mb-4;
}

.blog-post strong {
  @apply font-bold underline;
}
</style>