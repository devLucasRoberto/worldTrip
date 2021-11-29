import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  VStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Image,
  Button
} from '@chakra-ui/react'

type Country = {
  info: string
  countries: number
  languages: number
}

type Cities = {
  id: number
  city: string
}

interface InfoContinentProps {
  country: Country[]
  cities: Cities[]
}

export function InfoContinent({ country, cities }: InfoContinentProps) {
  return (
    <Box
      maxWidth="1176px"
      width="100%"
      mx="auto"
      my={['24px', '24px', '50px', '80px']}
      px="16px"
    >
      <SimpleGrid columns={2} minChildWidth={['1', '378px']} spacingX="70px">
        <Text
          fontSize={['14px', '16px', '20px', '1.5rem']}
          fontWeight="400"
          color="gray.600"
        >
          {country[0].info}
        </Text>
        <Flex justifyContent="space-between" alignItems="center">
          <VStack spacing="0" my={['16px', '16px', '0px', '0px']}>
            <Text
              fontSize={['24px', '35px', '40px', '3rem']}
              fontWeight="600"
              color="yellow.500"
            >
              {country[0].countries}
            </Text>
            <Text
              fontSize={['18px', '20px', '20px', '1.5rem']}
              fontWeight="600"
              color="gray.600"
            >
              países
            </Text>
          </VStack>

          <VStack spacing="0">
            <Text
              fontSize={['24px', '35px', '40px', '3rem']}
              fontWeight="600"
              color="yellow.500"
            >
              {country[0].languages}
            </Text>
            <Text
              fontSize={['18px', '20px', '20px', '1.5rem']}
              fontWeight="600"
              color="gray.600"
            >
              línguas
            </Text>
          </VStack>

          <VStack spacing="0">
            <Text
              fontSize={['24px', '35px', '40px', '3rem']}
              fontWeight="600"
              color="yellow.500"
            >
              27
            </Text>
            <Text
              fontSize={['18px', '20px', '20px', '1.5rem']}
              fontWeight="600"
              color="gray.600"
            >
              <Flex alignItems="center">
                cidades +100
                <Popover>
                  <PopoverTrigger>
                    <Button
                      size="xs"
                      background="transparent"
                      _focus={{
                        outline: '0'
                      }}
                      _hover={{
                        background: 'transparent'
                      }}
                    >
                      <Image src="/assets/info.svg" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    _focus={{
                      outline: '0'
                    }}
                  >
                    <PopoverArrow />
                    <PopoverCloseButton />

                    <Box color="gray.500" fontSize="1rem" fontWeight="600">
                      {cities.map(city => (
                        <PopoverBody key={city.id}>{city.city}</PopoverBody>
                      ))}
                    </Box>
                  </PopoverContent>
                </Popover>
              </Flex>
            </Text>
          </VStack>
        </Flex>
      </SimpleGrid>
    </Box>
  )
}
