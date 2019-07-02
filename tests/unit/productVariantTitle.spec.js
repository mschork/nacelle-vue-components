import { shallowMount, createLocalVue } from '@vue/test-utils'
import ProductVariantTitle from '@/components/ProductVariantTitle'

describe('ProductVariantTitle.vue', () => {
  it('renders a variant title', async () => {
    const wrapper = shallowMount(ProductVariantTitle, {
      propsData: { title: 'Great Product' }
    })
    expect(wrapper.html()).toBe('<p>Great Product</p>')
  })
})
