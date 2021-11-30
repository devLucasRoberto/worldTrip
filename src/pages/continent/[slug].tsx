import { Flex } from '@chakra-ui/react'
import { GetStaticPaths } from 'next'
import { Cities } from '../../components/Cities'
import { ContinentBanner } from '../../components/ContinentBanner'
import { Header } from '../../components/Header'
import { InfoContinent } from '../../components/InfoContinent'
import { api } from '../../services/api'
import Head from 'next/head'

type Country = {
  id: number
  title: string
  info: string
  imageBanner: string
  countries: number
  languages: number
}

type Cities = {
  id: number
  continentId: number
  city: string
  country: string
  image: string
  flag: string
}

interface ContinentProps {
  country: Country[]
  cities: Cities[]
}

export default function Continent({ country, cities }: ContinentProps) {
  return (
    <>
      <Head>
        <title>Home | {country[0].title}</title>
      </Head>
      <Flex
        w="100%"
        maxWidth={1440}
        direction="column"
        mx="auto"
        minHeight="100hv"
      >
        <Header />
        <ContinentBanner country={country} />
        <InfoContinent country={country} cities={cities} />
        <Cities cities={cities} />
      </Flex>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

type Params = {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params
  const ResponseCountry = await api.get(`continents?slug=${slug}`)
  const country = ResponseCountry.data
  if (country <= 0) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const ResponseCities = await api.get(`cities?continentId=${country[0].id}`)
  const cities = ResponseCities.data

  return {
    props: {
      country,
      cities
    },
    revalidate: 60 * 60 * 24 // 24h
  }
}
