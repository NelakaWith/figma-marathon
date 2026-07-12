<template>
  <button
    :type="($attrs.type as 'button' | 'submit' | 'reset') || 'button'"
    :class="computedClasses"
    :disabled="disabled || loading"
    class="hover:bg-brand/80"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String as () => "primary",
    default: "primary",
    validator: (value: string) => ["primary"].includes(value),
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
});

const baseClass = "";
const variantClasses = { primary: "bg-brand rounded-3xl" };
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
