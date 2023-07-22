<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav :class="navClass" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <slot name="brand"></slot>
      <a
        role="button"
        :class="{ 'navbar-burger': true, 'is-active': isShown }"
        aria-label="menu"
        aria-expanded="false"
        :data-target="props.menuId"
        @click="isShown = !isShown"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div
      :id="props.menuId"
      :class="{ 'navbar-menu': true, 'is-active': isShown }"
    >
      <div class="navbar-start">
        <slot></slot>
      </div>
      <div class="navbar-end">
        <slot name="end"></slot>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const props = defineProps({
  menuId: { type: String, default: "navbar" },
  fixed: { type: String, default: "" },
  transparent: { type: Boolean, default: false },
  shadowed: { type: Boolean, default: false },
})

const navClass = computed<Record<string, boolean>>(() => ({
  navbar: true,
  "is-transparent": props.transparent,
  "is-fixed-top": props.fixed === "top",
  "is-fixed-bottom": props.fixed === "bottom",
  "has-shadow": props.shadowed,
}))

const isShown = ref(false)
</script>
