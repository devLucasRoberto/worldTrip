import { Image, Box, Text, Flex } from '@chakra-ui/react'

export function ContinentBanner() {
  return (
    <Box position="relative">
      <Image src="/europa.png" maxHeight="500px" />
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
            Europa
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}
