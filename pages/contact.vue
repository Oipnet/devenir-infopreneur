<template>
  <NuxtLayout>
    <h1 class="text-4xl font-oswald">Contactez moi</h1>
    <div class="flex flex-row mt-8 mb-8 flex-wrap">
      <contact-summary/>
      <div class="w-1/2 h-[500px] min-h-1/2 inline-block" v-if="viewport.isGreaterThan('mobileWide')">
        <contact-map :latlng="[44.5547197, -0.2465171]"/>
      </div>
      <contact-form/>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">

import ContactForm from "~/components/contact/ContactForm.vue";
import ContactMap from "~/components/contact/ContactMap.vue";
import ContactSummary from "~/components/contact/ContactSummary.vue";

const viewport = useViewport()

</script>