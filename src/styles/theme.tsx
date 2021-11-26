import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      50: '#F5F8FA', // Heading and Text light
      200: '#DADADA', // Info light

      500: '#999999', // Info
      600: '#47585B' // Heading and Text
    },
    yellow: {
      500: '#FFBA08' // highlight
    }
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.600'
      }
    }
  }
})
