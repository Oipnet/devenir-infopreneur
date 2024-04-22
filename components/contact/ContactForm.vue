<script setup lang="ts">
import {type InferType, object, string} from "yup";

const toast = useToast()
const schema = object({
  email: string().email('L\'email n\'est pas valide').required('L\'email est obligatoire'),
  subject: string().required('Le sujet est obligatoire'),
  message: string().required('Le message est obligatoire')
})

const state = reactive({
  nom: undefined,
  prenom: undefined,
  email: undefined,
  subject: undefined,
  message: undefined
})

type Schema = InferType<typeof schema>

async function onSubmit (event: FormSubmitEvent<Schema>) {
  let message = {
    reply_to: {
      email: state.email
    },
    to: [{
      email: 'contact@forelse.info'
    }],
    subject: `${state.nom} ${state.prenom} - ${state.subject}`,
    text: state.message
  }

   await useFetch('/api/sendgrid', {
     method: 'POST',
     body: message
  });

  toast.add({
    color: "green",
    title: 'Me contacter',
    description: 'Votre message à été envoyé avec succès'
  })

  state.prenom = undefined
  state.nom = undefined
  state.email = undefined
  state.subject = undefined
  state.message = undefined
}

</script>

<template>
  <UForm :schema="schema" :state="state" @submit="onSubmit" class="w-full md:w-1/2 md:pl-8">
    <div class="flex flex-row">
      <UFormGroup label="Nom" name="nom" class="mb-8 w-1/2 pr-4">
        <UInput v-model="state.nom" />
      </UFormGroup>
      <UFormGroup label="Prenom" name="prenom" class="mb-8 w-1/2">
        <UInput v-model="state.prenom" />
      </UFormGroup>
    </div>
    <UFormGroup label="Email *" name="email" class="mb-8">
      <UInput v-model="state.email" />
    </UFormGroup>
    <UFormGroup label="Sujet *" name="subject" class="mb-8">
      <UInput v-model="state.subject" />
    </UFormGroup>
    <UFormGroup label="Message *" name="message" class="mb-8">
      <UTextarea v-model="state.message" />
    </UFormGroup>
    <UButton block variant="outline" type="submit">
      Envoyer
    </UButton>
  </UForm>
</template>

<style scoped>

</style>