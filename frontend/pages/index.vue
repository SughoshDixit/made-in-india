<template>
  <div class="container">
    <div v-if="products">
      <products
        v-for="product in products"
        :key="product.id"
        :product="product"
      ></products>
    </div>
    hi
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Products from '~/components/Products.vue'
import ProductsGQL from '~/graphql/products.gql'
import { ProductType } from '~/graphql/types'

interface Data {
  products?: ProductType[]
}

export default Vue.extend({
  components: { Products },
  data(): Data {
    return {
      // products: [
      //   {
      //     id: 'AD 156',
      //     name: 'Dabur Red',
      //     logo: 'www.daburred.com',
      //     description: 'Ayurvedic Toothpaste',
      //     isIndian: true,
      //     urls: ['www.daburred.com', 'www.daburred.com'],
      //     keywords: ['Tooth Paste', 'Tooth Brush']
      //   },
      //   {
      //     id: 'AD 156',
      //     name: 'Dabur Red',
      //     logo: 'www.daburred.com',
      //     description: 'Ayurvedic Toothpaste',
      //     isIndian: true,
      //     urls: ['www.daburred.com', 'www.daburred.com'],
      //     keywords: ['Tooth Paste', 'Tooth Brush']
      //   },
      //   {
      //     id: 'AD 156',
      //     name: 'Dabur Red',
      //     logo: 'www.daburred.com',
      //     description: 'Ayurvedic Toothpaste',
      //     isIndian: true,
      //     urls: ['www.daburred.com', 'www.daburred.com'],
      //     keywords: ['Tooth Paste', 'Tooth Brush']
      //   }
      // ],
      products: undefined
    }
  },
  apollo: {
    products: ProductsGQL
  }
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
