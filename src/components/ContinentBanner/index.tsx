import { Image, Box, Text, Flex } from '@chakra-ui/react'

export function ContinentBanner() {
  return (
    <Box position="relative">
      <Image src="/europa.png" maxHeight="500px" />
      <Flex position="absolute" zIndex="5" top="0" h="100%" w="100%">
        <Flex alignItems="end" pl="8.75rem" pb="3.68rem">
          <Text fontSize="3rem" fontWeight="600" color="gray.50">
            Europa
          </Text>
        </Flex>
      </Flex>
    </Box>
  )
}
