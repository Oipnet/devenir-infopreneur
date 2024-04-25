<script setup lang="ts">
  const route = useRoute()

  useHead(() => {
    return {
      htmlAttrs: {
        lang: 'fr'
      },
      script: [
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2253458813738703',
          async: true,
          crossorigin: 'anonymous'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://www.devenir-infopreneur.net' + route.path,
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
          sizes: '180x180',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-32x32.png',
          sizes: '32x32',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-16x16.png',
          sizes: '16x16',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
        {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg',
          color: '#5bbad5',
        },
      ],
      meta: [
        {
          name: 'msapplication-TileColor',
          content: '#5bbad5',
        },
        {
          name: 'theme-color',
          content: '#5bbad5',
        },
      ],
    }
  })
</script>

<template>
  <div class="font-roboto">
  <base-navbar />
    <UContainer>
      <slot />
    </UContainer>
    <base-footer />
  </div>
</template>

<style scoped>

</style>