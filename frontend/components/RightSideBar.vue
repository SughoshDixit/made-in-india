<template>
  <div class="bg-green-500 w-1/6 right-sidebar">Right Sidebar</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RightSideBar'
})
</script>

<style scoped>
.right-sidebar {
  border-radius: 0 25px 25px 0;
  padding: 1rem 0.4rem 1rem 3rem;
}
</style>
