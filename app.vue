<template>
  <div>
    <Navbar :class="{ 'is-light': color.value === 'light'}">
      <template #end>
        <NavbarItem @click="toggle">
          <o-icon pack="fas" :icon="color.value === 'dark' ? 'moon' : 'sun'" />
        </NavbarItem>
      </template>
    </Navbar>
    <main>
      <NuxtWelcome />
    </main>
  </div>
</template>

<script lang="ts" setup>
const color = useColorMode()

function toggle() {
  color.preference = color.value === "dark" ? "light" : "dark"
}
</script>

<style scoped>
main {
  padding-top: 8px;
}
</style>
