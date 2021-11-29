import { Image, Box, Text, Flex } from '@chakra-ui/react'

type Country = {
  title: string
  imageBanner: string
}

interface ContinentBannerProps {
  country: Country[]
}

export function ContinentBanner({ country }: ContinentBannerProps) {
  return (
    <Box position="relative">
      <Image
        src={`/${country[0].imageBanner}`}
        alt={country[0].title}
        maxHeight="500px"
      />
      <Flex position="absolute" zIndex="5" top="0" h="100%" w="100%">
        <Flex
          alignItems={['center', 'center', 'center', 'end']}
          justifyContent={['center', 'center', 'center', 'normal']}
          w="100%"
          pl={['0px', '0px', '0px', '8.75rem']}
          pb={['0px', '0px', '0px', '3.68rem']}
        >
          <Text
            fontSize={['28px', '35px', '40px', '3rem']}
            fontWeight="600"
            color="gray.50"
          >
            {country[0].title}
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}
