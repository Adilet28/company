<script setup lang='ts'>
import { useThemeStore } from '~/stores'
const themeStore = useThemeStore()
</script>

<template>
  <div>
    <Link rel="stylesheet" :href="themeStore.link" />
    <slot />
  </div>
</template>
