import { Flex, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex as="header" h={100} align="center" justify="center">
      <Image src="/images/logo.svg" alt="worldtrip" width={184} height={46} />
    </Flex>
  )
}