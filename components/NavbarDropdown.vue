<template>
  <div
    :class="{
      'navbar-item': true,
      'has-dropdown': true,
      'has-dropdown-up': props.up,
      'is-hoverable': !props.freezed,
      'is-active': props.active,
    }"
  >
    <a
      :class="{
        'navbar-link': true,
        'is-arrowless': props.arrowless,
      }"
    >
      {{ props.label }}
    </a>
    <div
      :class="{
        'navbar-dropdown': true,
        'is-right': right,
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  label: string
  freezed?: boolean
  active?: boolean
  right?: boolean
  up?: boolean
  arrowless?: boolean
}>()
</script>
