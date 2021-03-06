/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import { withKnobs, button } from '@storybook/addon-knobs'
import InterfaceModal from '../components/InterfaceModal'
import store from '../store/store'

const label = 'Show Modal'

storiesOf('Components | General', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addDecorator(() => ({
    template: '<div style="padding: 3rem;"><story/></div>'
  }))
  .add(
    'Modal',
    () => ({
      store,
      components: { InterfaceModal },
      data () {
        return {
          open: true
        }
      },
      template: `
        <interface-modal :modalOpen="open" v-on:closeModal="open = false">
        <h1>This is a modal.</h1>
        <p>Great work!</p>
        </interface-modal>
      `,
      created () {
        button(label, () => {
          this.open = true
        })
      }
    }),
    {
      info: {
        // summary: "Hello"
      }
    }
  )
