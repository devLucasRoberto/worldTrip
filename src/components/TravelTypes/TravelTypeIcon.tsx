import { VStack, Image, Text, Box } from '@chakra-ui/react'
import Link from 'next/link'

interface TravelTypeIconProps {
  title: string
  image: string
  href: string
}

export function TravelTypeIcon({ title, image, href }: TravelTypeIconProps) {
  return (
    <Box>
      <Link href={href} passHref>
        <VStack as="a" spacing="24px">
          <Image src={image} alt={title} width="85" height="85" />
          <Text color="gray.600" fontWeight="600" fontSize="24px">
            {title}
          </Text>
        </VStack>
      </Link>
    </Box>
  )
}
