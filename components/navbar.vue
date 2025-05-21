<template>
  <div class="navbar w-full" :class="{ mobile: isMobile() }">
    <img src="@/assets/images/logo.png" width="24" height="24" alt="" />
    <h1 class="text-3xl font-bold text-center">Vrydi Oudewaal</h1>
    <UNavigationMenu
      :items="items"
      class="w-full justify-center navbar"
      :orientation="isMobile() ? 'vertical' : 'horizontal'"
      :collapse="collapse"
      collapsible
      @click:collapse="toggleCollapse"
      highlight
      color="secondary"
    >
      <template #left>
        <UAvatar
          src="@/assets/images/logo.png"
          alt="Vrydi Oudewaal"
          size="md"
        />
      </template>
    </UNavigationMenu>
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const activeURL = useRoute().path;
const isActive = (item: NavigationMenuItem) => {
  return item.to === activeURL;
};

function isMobile() {
  const regex =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}

const items = ref<NavigationMenuItem[]>([
  {
    label: "About",
    icon: "material-symbols:person-book",
    to: "/",
    active: isActive({ to: "/" }),
  },
  {
    label: "Projects",
    icon: "material-symbols:code",
    to: "/projects",
    active: isActive({ to: "/projects" }),
  },
  {
    label: "Contact",
    icon: "material-symbols-light:contact-mail-rounded",
    to: "/contact",
    active: isActive({ to: "/contact" }),
  },
  {
    label: "GitHub",
    icon: "ion:logo-github",
    to: "https://github.com/vrydi",
    target: "_blank",
  },
]);

const collapse = ref(false);

const toggleCollapse = () => {
  collapse.value = !collapse.value;
};
</script>

<style>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  white-space: nowrap;
}

.mobile {
  flex-direction: column;
  gap: 0.5rem;
}
</style>
