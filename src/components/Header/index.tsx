import { Flex, Box, Image, Link as ChakraLink } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export function Header() {
  const { asPath } = useRouter()

  return (
    <Flex my={27} mx={140} alignItems="center">
      {asPath != '/' && (
        <Box>
          <Link href="/" passHref>
            <ChakraLink
              _focus={{
                outline: 'none'
              }}
            >
              <Image
                src="/assets/back.svg"
                alt="back"
                width="32px"
                height="32px"
              />
            </ChakraLink>
          </Link>
        </Box>
      )}

      <Link href="/" passHref>
        <Box as="a" mx="auto">
          <Image src="/assets/logo.png" alt="worldtrip" />
        </Box>
      </Link>
    </Flex>
  )
}
