import { Box, Text, SimpleGrid } from '@chakra-ui/react'
import { CityCard } from './CityCard'

export function Cities() {
  return (
    <Box
      w="100%"
      maxWidth={1176}
      px="16px"
      mx="auto"
      mb={['16px', '20px', '28px', '35px']}
    >
      <Text
        fontSize="2.25rem"
        fontWeight="500"
        color="gray.600"
        mb={['24px', '30px', '35px', '40px']}
      >
        Cidades +100
      </Text>
      <SimpleGrid
        columns={4}
        spacing={['20px', '25px', '35px', '45px']}
        minChildWidth="256px"
      >
        <CityCard
          city="Londres"
          country="Reino Unido"
          image="/cities/londres.png"
          flag="/flags/reinoUnido.png"
        />

        <CityCard
          city="Paris"
          country="França"
          image="/cities/paris.png"
          flag="/flags/franca.png"
        />

        <CityCard
          country="Roma"
          city="Itália"
          image="/cities/roma.png"
          flag="/flags/italia.png"
        />

        <CityCard
          country="Praga"
          city="República Tcheca"
          image="/cities/praga.png"
          flag="/flags/republicaTcheca.png"
        />

        <CityCard
          country="Amsterdã"
          city="Holanda"
          image="/cities/amsterda.png"
          flag="/flags/holanda.png"
        />
      </SimpleGrid>
    </Box>
  )
}
