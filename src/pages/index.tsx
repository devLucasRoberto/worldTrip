import { Flex, Box, Center, Text, VStack } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { SwiperC } from '../components/SwiperC'
import { TravelTypes } from '../components/TravelTypes'

export default function Home() {
  return (
    <Flex
      w="100%"
      maxWidth={1440}
      direction="column"
      mx="auto"
      minHeight="100hv"
    >
      <Header />
      <Banner />
      <TravelTypes />

      <Center w="100%">
        <VStack>
          <Box bg="gray.600" h="2px" w="90px" mt="80px" mb="52px" />

          <Text color="gray.600" fontSize="2.25rem" fontWeight="500">
            Vamos nessa?
          </Text>
          <Text color="gray.600" fontSize="2.25rem" fontWeight="500">
            Então escolha seu continente
          </Text>
        </VStack>
      </Center>
      <Box>
        <SwiperC />
      </Box>
    </Flex>
  )
}
