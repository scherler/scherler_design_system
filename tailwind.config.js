module.exports = {
  content: ['./src/ts/**/*.{ts,pcss}'],
  corePlugins: {
  },

  theme: {
    extend: {
      colors: {
        'log-meta': 'rgba(255, 255, 255, 0.4)',
        'log-error': 'rgba(255, 255, 255, 0.1)',
        'log-bg': '#2A2A2A',
        DEFAULT: '#0099cc',
        primary: '#007ACC',
        grey: '#EAEFF2',
        secondary: '#289CE1',
        danger: '#D32F2F',
        success: '#2E7D32',
        note: '#000000DE',
        failure: 'rgb(244 67 54)',
        unstable: 'rgb(255 167 38)',
        'cloudbees-blue': 'rgb(21, 101, 192)',
        'green': '#2E7D32',
        'orange': '#ED6C02',
        'red': '#BE282C',
        'purple': '#9C27B0',
        'trafficlight-green': '#2E7D32',
        'trafficlight-yellow': '#FFA726',
        'trafficlight-red': '#F44336',
        'secondary-button': 'rgb(0, 122, 204)',
        'grey-dark': "#333333",
        'grey-light': "#c8c8c8",
        'tabel-seperator': '#EAEFF2',
        'hover': '#f8f8f8',
        'modal-from': '#0099CC',
        'modal-to': '#007ACC',
        'modal-note': '#757575',
        highlight: 'yellow'
      },
      borderColor: {
        'grey-dark': "#333333",
        'grey-light': "#c8c8c8",
        'tabel-seperator': '#EAEFF2',

      },
      screens: {
        desktop: { min: '1440' },
        laptop: { max: '1366px' },
        tablet: { max: '1024px' },
        phone: { max: '812px' },
      },
      textColor: {
        'log-meta': 'rgba(255, 255, 255, 0.4)',
        DEFAULT: '#1E252C',
        primary: '#007ACC',
        secondary: '#289CE1',
        danger: '#D32F2F',
        'grey-light': "#c8c8c8",
        'green': '#2E7D32',
        'orange': '#ED6C02',
        'red': '#BE282C',
        'purple': '#9C27B0',
        highlight: '#D32F2F'
      },

      fontFamily: {
        default: [
          '"Roboto"',
        ],
        sans: [
          '"Roboto Sans"',
        ],
        'code': ['"Source Code Pro"'],
        'open-sans': ['"Open Sans"'],
        'source-sans-pro': ['"Source Sans Pro"'],
        montserrat: ['"Montserrat"'],
      },
    },
  },
  variants: {},
  plugins: [
  ],
};
