import { Flex, Box, Image, Link as ChakraLink } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export function Header() {
  const { asPath } = useRouter()

  return (
    <Flex
      mx={['22px', '40px', '80px', '140px']}
      h={['50px', '65px', '80px', '100px']}
      alignItems="center"
    >
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
                width={['16px', '23px', '28px', '32px']}
                height={['16px', '23px', '28px', '32px']}
              />
            </ChakraLink>
          </Link>
        </Box>
      )}

      <Link href="/" passHref>
        <Box
          as="a"
          mx="auto"
          w={['81px', '99px', '147px', '184px']}
          h={['20px', '25px', '37px', '46px']}
        >
          <Image src="/assets/logo.png" alt="worldtrip" />
        </Box>
      </Link>
    </Flex>
  )
}
