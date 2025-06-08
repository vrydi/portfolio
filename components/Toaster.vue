<template>
  <div class="toast" :class="[variant, { show: show }]">
    <h3>{{ title }}</h3>
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { Variants } from "~/assets/utils/enums";

const props = defineProps({
  title: String,
  message: String,
  variant: {
    type: String as PropType<Variants>,
    default: Variants.success,
  },
  time: {
    type: Number,
    default: 1000,
  },
});

const show = ref(false);

const showToast = () => {
  show.value = true;
  setTimeout(() => {
    show.value = false;
  }, props.time);
};

defineExpose({
  showToast,
});
</script>

<style>
.toast {
  position: absolute;
  opacity: 0;
  bottom: 16px;
  right: 16px;
  width: 250px;
  border-radius: 8px;
  display: none;
  padding: 8px;

  transition: all 300ms;
}

h3 {
  font-size: 1.5em;
}

.success {
  background-color: var(--ui-success);
}

.warning {
  background-color: var(--ui-warning);
}

.error {
  background-color: var(--ui-error);
}

.show {
  display: block;
  opacity: 1;
}
</style>
