import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { type UserModule } from '~/types'

const vuetify = createVuetify({
  components,
  directives,
})

export const install: UserModule = ({ app }) => {
  app.use(vuetify)
}
