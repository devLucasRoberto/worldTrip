import {
  HStack,
  Stack,
  Image,
  Text,
  Box,
  useBreakpointValue
} from '@chakra-ui/react'
import Link from 'next/link'

interface TravelTypeCardProps {
  title: string
  image: string
  href: string
}

export function TravelTypeCard({ title, image, href }: TravelTypeCardProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true
  })
  return (
    <Box>
      <Link href={href} passHref>
        <Stack
          as="a"
          px={['20px', '0px', '0px', '0px']}
          py={['10px', '0px', '0px', '0px']}
        >
          {isWideVersion && (
            <Image
              src={image}
              alt={title}
              width={['65', '45', '65', '85']}
              height={['65', '45', '65', '85']}
            />
          )}
          <HStack spacing="8px">
            {!isWideVersion && (
              <Image src="/assets/ponto.png" h="8px" w="8px"></Image>
            )}
            <Text
              color="gray.600"
              fontWeight="600"
              fontSize={['16px', '16px', '20px', '24px']}
            >
              {title}
            </Text>
          </HStack>
        </Stack>
      </Link>
    </Box>
  )
}
