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

        <button
          class="g-recaptcha"
          data-sitekey="6LdM2UcrAAAAAEg5ySgOpQ1We95HJIbsdhMPi8LG"
          data-callback="onSubmit"
          data-action="submit"
        >
          Submit
        </button>
      </UForm>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

import { onMounted } from "vue";

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://www.google.com/recaptcha/api.js";
  document.body.appendChild(script);
});

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
async function onSubmit(token: string) {
  (document.getElementById("form") as HTMLFormElement)?.submit();
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
