<template>
  <div class="flex justify-between">
    <img :src="logoURL" alt="stygar" srcset="" />
    <nav class="flex gap-8 items-center font-display text-lg font-light">
      <RouterLink
        v-for="link in routesList"
        :key="link.route"
        :to="link.route"
        class="hover:underline underline-offset-8 decoration-2"
        active-class="text-brand underline hover:text-brand/80"
      >
        {{ link.name }}
      </RouterLink>
    </nav>
    <AppButton>Get in Touch</AppButton>
  </div>
</template>

<script setup>
import logoURL from "@/assets/logo.svg";
import { RouterLink } from "vue-router";
import AppButton from "./AppButton.vue";

const routesList = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Services",
    route: "/services",
  },
  {
    name: "Portfolio",
    route: "/portfolio",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Contact",
    route: "/contact",
  },
];
</script>

<style></style>
