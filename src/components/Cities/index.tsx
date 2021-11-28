import { Box, Text, SimpleGrid, Image, Flex, Stack } from '@chakra-ui/react'
import { CityCard } from './CityCard'

export function Cities() {
  return (
    <Box w="100%" maxWidth={1160} mx="auto" mb="35px">
      <Text fontSize="2.25rem" fontWeight="500" color="gray.600">
        Cidades +100
      </Text>
      <SimpleGrid columns={4} spacing="45px" minChildWidth="256px">
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
