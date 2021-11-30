import { Box, Text, SimpleGrid } from '@chakra-ui/react'
import { CityCard } from './CityCard'

type Cities = {
  id: number
  continentId: number
  city: string
  country: string
  image: string
  flag: string
}

interface CitiesProps {
  cities: Cities[]
}

export function Cities({ cities }: CitiesProps) {
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
        {cities.map(city => (
          <CityCard
            key={city.id}
            city={city.city}
            country={city.country}
            image={`/cities/${city.image}`}
            flag={`/flags/${city.flag}`}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}
