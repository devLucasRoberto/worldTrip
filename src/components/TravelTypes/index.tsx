import { Flex } from '@chakra-ui/react'
import { TravelTypeIcon } from './travelTypeIcon'

export function TravelTypes() {
  return (
    <Flex maxWidth="1160px" width="100%" mx="auto" mt="114px">
      <Flex width="100%" justifyContent="space-between">
        <TravelTypeIcon
          title="vida noturna"
          image="assets/cocktail.svg"
          href="#"
        />

        <TravelTypeIcon title="praia" image="assets/surf.svg" href="#" />

        <TravelTypeIcon title="moderno" image="assets/building.svg" href="#" />

        <TravelTypeIcon title="clássico" image="assets/museum.svg" href="#" />

        <TravelTypeIcon title="e mais..." image="assets/earth.svg" href="#" />
      </Flex>
    </Flex>
  )
}
