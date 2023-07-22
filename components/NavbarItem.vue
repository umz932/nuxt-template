<template>
  <component
    :is="props.div ? 'div' : 'a'"
    :class="{
      'navbar-item': props.div || !props.link,
      'navbar-link': !props.div && props.link,
    }"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
const props = defineProps<{
  div?: boolean
  link?: boolean
}>()
</script>
