import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import pt from 'vuetify/src/locale/pt';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      // Define colors used
      light: {
        primary: '#AE8A2C',
        primaryDark: '#7B5D00',
        primaryLight: '#E3BA5B',
        secondary: '#263238',
        secondaryDark: '#000a12',
        secondaryLight: '#4f5b62',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
  lang: {
    locales: { pt },
    current: 'pt',
  },
  icons: {
    iconfont: 'mdi',
  },
});
