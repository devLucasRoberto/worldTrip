import { Flex, Box, Center, Text, VStack } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { SwiperC } from '../components/SwiperC'
import { TravelTypes } from '../components/TravelTypes'
import { api } from '../services/api'

type Continent = {
  id: number
  title: string
  subtitle: string
  slug: string
  imageSwiper: string
}

interface ContinentsProps {
  continent: Continent[]
}

export default function Home({ continent }: ContinentsProps) {
  const [continents, seContinents] = useState(continent)

  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>

      <Flex
        w="100%"
        maxWidth={1440}
        direction="column"
        mx="auto"
        minHeight="100hv"
      >
        <Header />
        <Banner />
        <TravelTypes />

        <Center w="100%">
          <VStack>
            <Box
              bg="gray.600"
              h="2px"
              w="90px"
              mt={['36px', '48px', '60px', '80px']}
              mb={['24px', '30px', '40px', '52px']}
            />

            <Text
              color="gray.600"
              fontSize={['20px', '25px', '30px', '2.25rem']}
              fontWeight="500"
            >
              Vamos nessa?
            </Text>
            <Text
              color="gray.600"
              fontSize={['18px', '25px', '30px', '2.25rem']}
              fontWeight="500"
            >
              Então escolha seu continente
            </Text>
          </VStack>
        </Center>
        <Box>
          <SwiperC continents={continents} />
        </Box>
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const services = await api.get('continents')

  const continent = services.data.map((data: Continent) => {
    return {
      id: data.id,
      title: data.title,
      subtitle: data.subtitle,
      slug: data.slug,
      imageSwiper: data.imageSwiper
    }
  })

  return {
    props: {
      continent
    },
    revalidate: 60 * 60 * 24 // 24h
  }
}
