import { Heading, Image, Box, Text, Flex } from '@chakra-ui/react'

export function Banner() {
  return (
    <Box>
      <Box position="relative">
        <Image src="assets/capa.png" w="1440px" h="335px" objectFit="cover" />

        <Flex
          justifyContent="space-between"
          width="100%"
          top="0"
          position="absolute"
          zIndex="5"
          maxWidth="1440px"
          px="140px"
          height="100%"
          alignItems="center"
        >
          <Box>
            <Heading
              color="gray.50"
              fontSize="36"
              fontWeight="500"
              lineHeight="1.5"
            >
              5 Continentes, <br /> infinitas possibilidades.
            </Heading>
            <Text color="gray.200" fontSize="20px" fontWeight="400" mt="20px">
              Chegou a hora de tirar do papel a viagem que você <br /> sempre
              sonhou.
            </Text>
          </Box>

          <Box marginTop="120px">
            <Image
              src="assets/airplane.svg"
              maxWidth="417px"
              maxHeight="270px"
              width="100%"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
