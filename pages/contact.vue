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
        <UFormField label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormField>

        <UFormField label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormField>

        <NuxtTurnstile v-model="token" />
        <button @click="turnstile.reset()">Reset token in template</button>
        <button @click="reset()">Reset token from handler</button>
      </UForm>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const token = ref("");
const turnstile = ref();

function reset() {
  turnstile.value?.reset();
}

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined,
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
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
