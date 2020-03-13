const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          500: '#1da1f2',
          600: '#1781c2'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
