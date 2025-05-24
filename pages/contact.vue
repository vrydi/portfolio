<template>
  <div class="page h-full">
    <UCard class="mt-6 form">
      <UForm :state="state" class="space-y-4" @submit="onSubmit" id="form">
        <UFormField label="name" name="name">
          <UInput v-model="state.name" type="name" />
        </UFormField>

        <UFormField label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormField>

        <UTextarea placeholder="Type something..." v-model="state.message" />

        <NuxtTurnstile v-model="token" />
        <UButton type="submit"> Submit </UButton>
      </UForm>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const token = ref("");

// const schema = z.object({
//   email: z.string().email("Invalid email"),
//   name: z.string(),
//   message: z.string().min(8, "Must be at least 8 characters"),
// });

// type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  email: undefined,
  name: undefined,
  message: undefined,
});

const toast = useToast();
async function onSubmit() {
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
  });

  await $fetch("/api/mail", {
    method: "POST",
    body: {
      name: state.name,
      email: state.email, // for reply-to
      subject: "Contact Request",
      text: state.message,
    },
  });
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
