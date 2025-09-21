// MDI - JS SVG (ADV - Optimized)
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

// Import Icons Here
import { mdiTorch } from '@mdi/js'
import { mdiSignDirection } from '@mdi/js'
import { mdiMapCheckOutline } from '@mdi/js'
import { mdiPostLamp } from '@mdi/js'
import { mdiAccountOutline } from '@mdi/js'
import { mdiEmailOutline } from '@mdi/js'
import { mdiPhone } from '@mdi/js'
import { mdiText } from '@mdi/js'
import { mdiCameraGopro } from '@mdi/js'
import { mdiCloseBoxMultipleOutline } from '@mdi/js'
import { mdiFire } from '@mdi/js'
import { mdiFireExtinguisher } from '@mdi/js'
import { mdiLinkVariant } from '@mdi/js'


// Vuetify
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  // fix: font issue can't change default font
  defaultAssets: false,
  theme: {
    defaultTheme: 'light',
    themes: {
      dark: {
        variables: {},
        dark: true,
        colors: {
          // orange
          primary: '#3D3D3D',
          purple: '#555262',
          darkGrey: '#3D3D3D'
        }
      },
      light: {
        variables: {},
        dark: false,
        // orange
        colors: {
          secondary: '#FFFFFF',
          darkGrey: '#3D3D3D'
        }
      }
    }
  },
  icons: {
    defaultSet: 'mdi',
    /* place imported icons below to alias in front-end
      EX: icon="$Plus" */
    aliases: {
      ...aliases,
      Torch: mdiTorch,
      SignDirection: mdiSignDirection,
      MapCheckOutline: mdiMapCheckOutline,
      PostLamp: mdiPostLamp,
      AccountOutline: mdiAccountOutline,
      EmailOutline: mdiEmailOutline,
      Phone: mdiPhone,
      Text: mdiText,
      CameraGopro: mdiCameraGopro,
      CloseBoxMultipleOutline: mdiCloseBoxMultipleOutline,
      Fire: mdiFire,
      FireExtinguisher: mdiFireExtinguisher,
      LinkVariant: mdiLinkVariant
    },
    sets: {
      mdi
    }
  }
  
})
