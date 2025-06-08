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
        <UFormField label="name" name="name" class="w-full">
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

        <UFormField label="Company" name="company">
          <UTextarea
            placeholder="Type something..."
            v-model="state.request"
            autoresize
            required
          />
        </UFormField>

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
  request: z.string().min(10, "Cannot be empty"),
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
  const { $mail } = useNuxtApp() as any;

  const message = `
    Name: ${name}
    Company: ${company}
    Email: ${email}
    Phone: ${phone}
    Message: ${request}
  `;

  $mail.send({
    from: email,
    subject: "Portfolio contact request",
    text: message,
  });
}
</script>

<style scoped>
.form {
  width: 350px;
  margin-inline: auto;
}

.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inline-flex {
  display: block;
}
</style>
