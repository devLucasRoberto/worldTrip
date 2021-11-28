import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper'
import { Image, Box, Flex, VStack, Text } from '@chakra-ui/react'

SwiperCore.use([Autoplay, Pagination, Navigation])

export function SwiperC() {
  return (
    <Box maxWidth="1240px" width="100%" mx="auto" mt="52px" mb="40px">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 100500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Flex position="relative" alignItems="center" justifyContent="center">
            <Image src="swiperpng.png" height="450" objectFit="cover" />
            <Flex position="absolute" top="0" height="100%" zIndex="5">
              <Flex justifyContent="center" alignItems="center">
                <VStack>
                  <Text color="gray.50" fontSize="48px" fontWeight="700">
                    Europa
                  </Text>
                  <Text color="gray.200" fontSize="24px" fontWeight="700">
                    O continente mais antigo.
                  </Text>
                </VStack>
              </Flex>
            </Flex>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </Box>
  )
}
