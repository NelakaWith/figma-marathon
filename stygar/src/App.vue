<script setup>
import { RouterView } from "vue-router";
import AppHeader from "./components/common/AppHeader.vue";
</script>

<template>
  <div class="w-full p-14 mx-auto">
    <AppHeader />
    <RouterView />
  </div>
</template>
