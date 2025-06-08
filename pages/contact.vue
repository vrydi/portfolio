<template>
  <div class="page h-full">
    <UCard class="mt-6 form">
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
        id="form"
        ref="form"
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
      <Toaster
        :title="toasterTitle"
        :variant="toasterVariant"
        :message="toasterMessage"
        ref="toaster"
      />
    </UCard>
  </div>
</template>

<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";
import axios from "axios";
import Toaster from "~/components/Toaster.vue";
import { Variants } from "~/assets/utils/enums";

const token = ref("");
const form = ref<HTMLFormElement | null>(null);
const toaster = ref<InstanceType<typeof Toaster> | null>(null);

const toasterTitle = ref("");
const toasterMessage = ref("");
const toasterVariant = ref(Variants.success);

const showToast = () => {
  toaster.value?.showToast();
};

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

async function onSubmit(event: FormSubmitEvent<Schema>) {
  axios({
    url: "https://formspree.io/f/mblygjlo",
    method: "post",
    headers: {
      Accept: "application/json",
    },
    data: event.data,
  }).then((response) => {
    console.log(response);
    if ((response.status = 200)) {
      state.name = "";
      state.company = "";
      state.email = "";
      state.phone = "";
      state.request = "";

      toasterMessage.value = "Contact request has been successfully submitted";
      toasterTitle.value = "Success";
      toasterVariant.value = Variants.success;
      showToast();
    } else {
      toasterMessage.value = "Something went wrong";
      toasterTitle.value = "Error";
      toasterVariant.value = Variants.error;
      showToast();
    }
  });
  // const { $mail } = useNuxtApp() as any;

  // const message = `
  //   Name: ${name}
  //   Company: ${company}
  //   Email: ${email}
  //   Phone: ${phone}
  //   Message: ${request}
  // `;

  // $mail.send({
  //   from: email,
  //   subject: "Portfolio contact request",
  //   text: message,
  // });
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
