import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper'
import {
  Image,
  Box,
  Flex,
  VStack,
  Text,
  Link as ChakraLink
} from '@chakra-ui/react'
import Link from 'next/link'

SwiperCore.use([Autoplay, Pagination, Navigation])

type Continent = {
  title: string
  subtitle: string
  slug: string
  imageSwiper: string
}
interface SwiperProps {
  continents: Continent[]
}

export function SwiperC({ continents }: SwiperProps) {
  return (
    <Box
      maxWidth="1240px"
      width="100%"
      height={['250px', '450px']}
      mx="auto"
      mt={['20px', '30px', '40px', '52px']}
      mb={['24px', '30px', '45px', '40px']}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        className="mySwiper"
      >
        {continents.map(continent => (
          <SwiperSlide>
            <Link href={`/continent/${continent.slug}`}>
              <ChakraLink>
                <Flex
                  position="relative"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    src={continent.imageSwiper}
                    alt={continent.title}
                    height={['250px', '330px', '400px', '450px']}
                    objectFit="cover"
                  />
                  <Flex position="absolute" top="0" height="100%" zIndex="5">
                    <Flex justifyContent="center" alignItems="center">
                      <VStack>
                        <Text
                          color="gray.50"
                          fontSize={['24px', '30px', '40px', '48px']}
                          fontWeight="700"
                        >
                          {continent.title}
                        </Text>
                        <Text
                          color="gray.200"
                          fontSize={['14px', '16px', '20px', '24px']}
                          fontWeight="700"
                        >
                          {continent.subtitle}
                        </Text>
                      </VStack>
                    </Flex>
                  </Flex>
                </Flex>
              </ChakraLink>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
