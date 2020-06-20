<template>
  <div class="bg-orange-500 w-1/6 left-sidebar">Sidebar</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SideBar'
})
</script>

<style scoped>
.left-sidebar {
  border-radius: 25px 0 0 25px;
  padding: 1rem 3rem 1rem 0.4rem;
}
</style>
