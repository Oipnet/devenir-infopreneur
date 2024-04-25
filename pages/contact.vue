<template>
  <NuxtLayout>
    <h1 class="text-4xl font-oswald mt-12 mb-8">Bienvenue sur la page de contact de devenir-infopreneur.net !</h1>
    <p>
      Vous avez des <strong class="font-bold font-oswald">questions</strong>, des
      <strong class="font-bold font-oswald">suggestions</strong> ou simplement
      <strong class="font-bold font-oswald">envie de discuter</strong> ? Nous serions ravis d'entendre parler de vous !<br><br>

      Utilisez le formulaire ci-dessous pour nous contacter. Nous nous efforcerons de vous répondre dans les plus brefs délais. Votre feedback est précieux pour nous aider à améliorer notre contenu et à mieux répondre à vos besoins en tant qu'infopreneurs en herbe.<br><br>

      Merci de votre intérêt pour devenir-infopreneur.net ! Nous avons hâte de vous entendre !
    </p>
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

useHead({
  title: 'Devenir Infopreneur - Contactez moi',
  meta: [
    {
      name: 'description',
      content: 'Plongez dans l’univers de l’infopreneuriat et découvrez comment transformer vos connaissances en business qui cartonne !'
    }
  ]

})

</script>