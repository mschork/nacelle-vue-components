/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from 'storybook-addon-vue-info'
import store from '../store/store'

import CartFlyout from '../components/CartFlyout'

storiesOf('Components | Cart', module)
  .addDecorator(withInfo)
  .add(
    'Flyout',
    () => ({
      store,
      components: { CartFlyout },
      mounted() {
        store.commit('cart/showCart')
        store.commit('cart/setLineItems', [])
        store.dispatch('cart/addLineItem', {
          image: {
            source:
              'https://nacelle-assets.s3-us-west-2.amazonaws.com/shirt.jpg'
          },
          title: 'Gray T-Shirt',
          productId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzM1OTkyMDE4NjE3Mzc=',
          handle: 'gray-t-shirt',
          price: '29.99',
          quantity: 1,
          variant: {
            id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yODU2ODgyMDAyMzQwMQ==',
            title: 'Cool Version'
          }
        })

        store.dispatch('cart/addLineItem', {
          image: {
            source:
              'https://nacelle-assets.s3-us-west-2.amazonaws.com/shirt.jpg'
          },
          title: 'Black T-Shirt',
          productId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzM1OTkyMDE4djE3Mzc=',
          handle: 'black-t-shirt',
          price: '29.99',
          quantity: 1,
          variant: {
            id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWaudC8yODU2ODgyMDAyMzQwMQ=='
          }
        })
        store.dispatch('cart/addLineItem', {
          image: {
            source:
              'https://nacelle-assets.s3-us-west-2.amazonaws.com/shirt.jpg'
          },
          title: 'Brown T-Shirt',
          productId: 'Z2lkOi8vc2hvcGlmeS9QcmzkdWN0LzM1OTkyMDE4djE3Mzc=',
          handle: 'brown-t-shirt',
          price: '29.99',
          quantity: 1,
          variant: {
            id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWaudC8yODU3ODgyMDAyMzQwMQ=='
          }
        })
      },
      template: `<cart-flyout/>`
    }),
    {
      info: {
        // summary: "Hello"
      }
    }
  )
