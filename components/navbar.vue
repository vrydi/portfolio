<template>
  <div class="navbar w-full" :class="{ mobile: isMobile() }">
    <img src="@/assets/images/logo.png" width="24" height="24" alt="" />
    <h1 class="text-3xl font-bold text-center">Vrydi Oudewaal</h1>
    <UNavigationMenu
      :items="items"
      class="w-full justify-center navbar"
      :orientation="isMobile() ? 'vertical' : 'horizontal'"
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

const activeURL = ref("/");
const isActive = (item: NavigationMenuItem) => {
  return item.to === useRoute().path;
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

// Get the router and route instances
const router = useRouter();
const route = useRoute();

// Watch for route changes and update the active URL
watch(
  () => route.path,
  (newPath) => {
    activeURL.value = newPath;
    items.value.forEach((item) => {
      item.active = item.to === newPath;
    });
  }
);
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
