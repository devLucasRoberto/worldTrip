import { Flex } from '@chakra-ui/react'
import { TravelTypeCard } from './TravelTypeCard'

export function TravelTypes() {
  return (
    <Flex
      maxWidth="1176px"
      width="100%"
      mx="auto"
      mt="114px"
      px={['50', '20px', '16px', '16px']}
      justifyContent={[
        'center',
        'space-between',
        'space-between',
        'space-between'
      ]}
      flexWrap="wrap"
    >
      <TravelTypeCard
        title="vida noturna"
        image="assets/cocktail.svg"
        href="#"
      />

      <TravelTypeCard title="praia" image="assets/surf.svg" href="#" />

      <TravelTypeCard title="moderno" image="assets/building.svg" href="#" />

      <TravelTypeCard title="clássico" image="assets/museum.svg" href="#" />

      <TravelTypeCard title="e mais..." image="assets/earth.svg" href="#" />
    </Flex>
  )
}
