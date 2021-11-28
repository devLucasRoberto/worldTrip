import { Text, Image, Flex, Stack } from '@chakra-ui/react'

interface CityCardProps {
  country: string
  city: string
  image: string
  flag: string
}

export function CityCard({ country, city, image, flag }: CityCardProps) {
  return (
    <Stack borderRadius="4px" height="100%" spacing="0">
      <Image src={image} alt={city} width="100%" borderTopRadius="4px" />
      <Flex
        alignItems="center"
        justifyContent="space-between"
        py="25px"
        px="24px"
        border="1px"
        borderColor="yellow.500"
        borderTop="0"
        borderBottomRadius="4px"
        height="100%"
      >
        <Stack spacing="12px" maxWidth="166px">
          <Text fontSize="1.25rem" fontWeight="600" color="gray.600">
            {city}
          </Text>
          <Text fontSize="1rem" fontWeight="500" color="gray.500">
            {country}
          </Text>
        </Stack>
        <Flex width="30px" height="30px" borderRadius="50%" flexShrink="0">
          <Image
            src={flag}
            alt={country}
            width="30px"
            height="30px"
            borderRadius="50%"
          />
        </Flex>
      </Flex>
    </Stack>
  )
}
