import { mount } from '@vue/test-utils'
import Product from '@/components/Product.vue'

describe('Products', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Product)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
