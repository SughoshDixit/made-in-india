<template>
  <div class="bg-gray-300 -ml-10 -mr-10 main-content">
    <slot>MainContent</slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({ name: 'MainContent' })
</script>

<style scoped>
.main-content {
  z-index: 100;
  padding: 1rem 2rem;
  border-radius: 15px;
}
</style>
