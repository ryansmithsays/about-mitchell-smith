/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        hornets: {
          navy: '#0A2540',
          green: '#107C41',
          accent: '#16A34A',
          light: '#F0FDF4'
        },
        sting: {
          navy: '#0F1E36',
          blue: '#1D4ED8',
          volt: '#A3E635',
          voltDark: '#84CC16',
          light: '#F7FEE7'
        },
        lovejoy: {
          red: '#BA0C2F',
          redHover: '#990B26',
          black: '#111827',
          light: '#FEF2F2'
        },
        orchestra: {
          slate: '#1e293b',
          accent: '#0284c7',
          light: '#f8fafc'
        }
      }
    }
  },
  plugins: []
}
