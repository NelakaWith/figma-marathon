<template>
  <div class="flex w-full">
    <div class="flex-1 mt-32 max-w-3xl">
      <h1 class="font-display font-semibold text-7xl mb-8">
        Turning <span class="text-brand">Ideas</span> Into Digital Reality
      </h1>
      <p class="font-body text-2xl mb-10">
        Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan ricotta
        garlic dolor sauce marinara Chicago marinara. Tomato dolor pesto pesto
        Bianca pesto roll onions.
      </p>
      <div class="flex gap-4">
        <AppButton>Start a Project</AppButton>
        <AppButton
          variant="transparent"
          :icon="ArrowRight02Icon"
          iconPosition="after"
        >
          See Our Work
        </AppButton>
      </div>
    </div>
    <div class="flex-1"></div>
  </div>
</template>

<script setup lang="ts">
import AppButton from "../common/AppButton.vue";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
</script>

<style></style>
