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

export function InfoContinent() {
  return (
    <Box maxWidth="1160px" width="100%" mx="auto" my="80px">
      <SimpleGrid columns={2} minChildWidth="400px" spacingX="70px">
        <Text fontSize="1.5rem" fontWeight="400" color="gray.600">
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <Flex height="100%" width="100%" justifyContent="space-between">
          <VStack spacing="0">
            <Text fontSize="3rem" fontWeight="600" color="yellow.500">
              50
            </Text>
            <Text fontSize="1.5rem" fontWeight="600" color="gray.600">
              países
            </Text>
          </VStack>

          <VStack spacing="0">
            <Text fontSize="3rem" fontWeight="600" color="yellow.500">
              60
            </Text>
            <Text fontSize="1.5rem" fontWeight="600" color="gray.600">
              línguas
            </Text>
          </VStack>

          <VStack spacing="0">
            <Text fontSize="3rem" fontWeight="600" color="yellow.500">
              27
            </Text>
            <Text fontSize="1.5rem" fontWeight="600" color="gray.600">
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

                    <Box color="gray.500" fontSize="1.25rem" fontWeight="600">
                      <PopoverBody>Londres</PopoverBody>
                      <PopoverBody>Paris</PopoverBody>
                      <PopoverBody>Roma</PopoverBody>
                      <PopoverBody>Praga</PopoverBody>
                      <PopoverBody>Amsterdã</PopoverBody>
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
