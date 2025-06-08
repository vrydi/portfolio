<template>
  <div class="page h-full">
    <UCard class="mt-6 form">
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
        id="form"
      >
        <UFormField label="name" name="name">
          <UInput v-model="state.name" type="name" />
        </UFormField>

        <UFormField label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormField>

        <UFormField label="Phone" name="phone">
          <UInput v-model="state.phone" />
        </UFormField>

        <UFormField label="Company" name="company">
          <UInput v-model="state.company" />
        </UFormField>

        <UTextarea placeholder="Type something..." v-model="state.request" />

        <NuxtTurnstile v-model="token" />
        <UButton type="submit" color="secondary"> Submit </UButton>
      </UForm>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const token = ref("");

const schema = z.object({
  email: z.string().email("Invalid email"),
  name: z.string(),
  request: z.string(),
  phone: z.string().optional(),
  company: z.string().optional(),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  email: undefined,
  name: undefined,
  request: undefined,
  company: undefined,
  phone: undefined,
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  const { company, email, name, phone, request } = event.data;
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
  });
  // const { $mail } = useNuxtApp() as any;

  // $mail.send({
  //   from: "John Doe",
  //   subject: "Incredible",
  //   text: "This is an incredible test message",
  // });

  // await $fetch("/api/sendMail", {
  //   method: "POST",
  //   body: {
  //     name,
  //     company,
  //     email,
  //     phone,
  //     request,
  //   },
  // });
}
</script>

<style scoped>
.form {
  width: fit-content;
  margin-inline: auto;
}

.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
