import { Flex } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <Flex
      w="100%"
      maxWidth={1440}
      direction="column"
      mx="auto"
      minHeight="100hv"
    >
      <Header />
      <Banner />
      <h1>home</h1>
    </Flex>
  )
}
