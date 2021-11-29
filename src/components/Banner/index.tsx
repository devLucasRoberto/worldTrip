import {
  Heading,
  Image,
  Box,
  Text,
  Flex,
  useBreakpointValue
} from '@chakra-ui/react'

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Box position="relative">
        <Image
          src="assets/capa.png"
          h={['163px', '223px', '265px', '335px']}
          objectFit="cover"
        />

        <Flex
          justifyContent={['center', 'center', 'center', 'space-between']}
          width="100%"
          top="0"
          position="absolute"
          zIndex="5"
          maxWidth="1440px"
          px={['16px', '16px', '16px', '140px']}
          height="100%"
          alignItems="center"
        >
          <Box mr={['0', '0', '0', '60px']}>
            <Heading
              color="gray.50"
              fontSize={['20', '20', '36', '36']}
              fontWeight="500"
              lineHeight="1.5"
            >
              5 Continentes, <br /> infinitas possibilidades.
            </Heading>
            <Text
              color="gray.200"
              fontSize={['14px', '14px', '20px', '20px']}
              fontWeight="400"
              mt="20px"
            >
              Chegou a hora de tirar do papel a viagem que você <br /> sempre
              sonhou.
            </Text>
          </Box>

          {isWideVersion && (
            <Box marginTop="120px">
              <Image
                src="assets/airplane.svg"
                maxWidth="417px"
                maxHeight="270px"
                width="100%"
              />
            </Box>
          )}
        </Flex>
      </Box>
    </Box>
  )
}
