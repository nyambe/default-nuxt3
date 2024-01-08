<template>
  <div :class="navBar({ color, size, padding })">
    <div class="navbar-start">
      <slot name="start">
        <div>
          <a class="text-xl normal-case btn btn-ghost">LOGO</a>
        </div>
      </slot>
    </div>
    <div class="navbar-center">
      <slot name="center"> </slot>
    </div>
    <div class="navbar-end">
      <slot name="end"> </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { navBar } from './NavBarProps'
import type { NavBarProps } from './NavBarProps'

defineProps<{
  color?: NavBarProps['color']
  size?: NavBarProps['size']
  padding?: NavBarProps['padding']
}>()
</script>

<style>
.navbar.navbar-small {
  min-height: 1rem;
}

.navbar.navbar-large {
  min-height: 8rem;
}
</style>
