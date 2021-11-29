import { Flex } from '@chakra-ui/react'
import { GetStaticPaths } from 'next'
import { Cities } from '../../components/Cities'
import { ContinentBanner } from '../../components/ContinentBanner'
import { Header } from '../../components/Header'
import { InfoContinent } from '../../components/InfoContinent'
import { api } from '../../services/api'

type Country = {
  title: string
  info: string
  imageBanner: string
  countries: string
  languages: string
}

interface ContinentProps {
  country: Country[]
}

export default function Continent({ country }: ContinentProps) {
  return (
    <Flex
      w="100%"
      maxWidth={1440}
      direction="column"
      mx="auto"
      minHeight="100hv"
    >
      <Header />
      <ContinentBanner country={country} />
      <InfoContinent country={country} />
      <Cities />
    </Flex>
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
  const ResponseCountry = await api.get(`continents?slug=${slug}`).then()
  const country = ResponseCountry.data

  return {
    props: {
      country
    },
    revalidate: 60 * 60 * 24 // 24h
  }
}
