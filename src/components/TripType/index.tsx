import { Flex, Image, Text } from '@chakra-ui/react'

interface TripTypeProps {
  icon: {
    src: string
    alt: string
  }
  title: string
}

export function TripType({ icon, title }: TripTypeProps) {
  return (
    <Flex as="div" align="center" flexDir="column">
      <Image src={icon.src} alt={icon.alt} h="85px" w="85px" />
      <Text fontSize="24px" fontWeight="semibold" color="#47585B" marginTop="24px">{title}</Text>
    </Flex>
  )
}