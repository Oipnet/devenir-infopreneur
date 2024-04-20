<script setup lang="ts">
  import {useTags} from "~/composables/useTags";

  const tags = await useTags()
</script>

<template>
  <ul>
    <li v-for="tag in tags">
      <div>
        <h2>{{ tag.label }}</h2>
        <div v-for="article in tag.articles">
          <h3>{{ article.title}}</h3>
          <ContentRendererMarkdown :value="article.excerpt" />
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped>

</style>