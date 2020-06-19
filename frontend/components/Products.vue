<template>
  <div class="product">
    {{ product.id }}
    {{ product.name }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropOptions } from 'vue/types/umd'
import { ProductType } from '~/graphql/types'

export default Vue.extend({
  name: 'Products',
  props: {
    product: { type: Object, default: () => {} } as PropOptions<ProductType>
  }
})
</script>

<style lang="scss" scoped>
.product {
  background: white;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 15px;
}
</style>
