<template>
  <button
    :type="($attrs.type as 'button' | 'submit' | 'reset') || 'button'"
    :class="computedClasses"
    :disabled="disabled || loading"
    class="flex items-center justify-center gap-2 rounded-3xl"
  >
    <template v-if="icon && iconPosition === 'before'">
      <HugeiconsIcon v-if="Array.isArray(icon)" :icon="icon" class="w-5 h-5" />
      <component v-else :is="icon" class="w-5 h-5" />
    </template>

    <slot />

    <template v-if="icon && iconPosition === 'after'">
      <HugeiconsIcon v-if="Array.isArray(icon)" :icon="icon" class="w-5 h-5" />
      <component v-else :is="icon" class="w-5 h-5" />
    </template>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Component } from "vue";
import { HugeiconsIcon } from "@hugeicons/vue";

const props = defineProps({
  variant: {
    type: String as () => "primary" | "transparent",
    default: "primary",
    validator: (value: string) => ["primary", "transparent"].includes(value),
  },
  size: {
    type: String as () => "md",
    default: "md",
    validator: (value: string) => ["md"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: [String, Object, Function, Array] as unknown as () =>
      | string
      | Component
      | any[],
    default: undefined,
  },
  iconPosition: {
    type: String as () => "before" | "after",
    default: "before",
    validator: (value: string) => ["before", "after"].includes(value),
  },
});

const baseClass = "";
const variantClasses = {
  primary: "bg-brand hover:bg-brand/80",
  transparent: "bg-transparent hover:bg-brand/50",
};
const sizeClasses = { md: " px-10 py-4" };

const computedClasses = computed(() => {
  return [
    baseClass,
    variantClasses[props.variant],
    sizeClasses[props.size],
    props.disabled || props.loading
      ? "cursor-not-allowed opacity-60"
      : "cursor-pointer",
  ].join(" ");
});
</script>

<style></style>
