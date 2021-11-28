import { Flex } from '@chakra-ui/react'
import { ContinentBanner } from '../../components/ContinentBanner'
import { Header } from '../../components/Header'

export default function Continent() {
  return (
    <Flex
      w="100%"
      maxWidth={1440}
      direction="column"
      mx="auto"
      minHeight="100hv"
    >
      <Header />
      <ContinentBanner />
      <h1>continent</h1>
    </Flex>
  )
}
