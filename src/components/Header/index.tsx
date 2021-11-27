import { Flex, Box, Image, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

export function Header() {
  return (
    <Flex my={27} mx={140} alignItems="center">
      <Box>
        <Link href="/" passHref>
          <ChakraLink>
            <Image
              src="/assets/back.svg"
              alt="back"
              width="32px"
              height="32px"
            />
          </ChakraLink>
        </Link>
      </Box>

      <Box mx="auto">
        <Image src="/assets/logo.png" alt="worldtrip" />
      </Box>
    </Flex>
  )
}
