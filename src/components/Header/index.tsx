import Link from 'next/link'
import { Flex, Image } from '@chakra-ui/react'

interface HeaderProps {
  showReturnArrow?: boolean
}

export function Header({ showReturnArrow = false }: HeaderProps) {
  return (
    <Flex as="header" h={100} align="center" justify="center" px="140px">
      {showReturnArrow &&
        <Link href="/">
          <a><Image src="/images/left-arrow.svg" alt="Botão voltar"/></a>
        </Link>
      }
      <Image flex="1" src="/images/logo.svg" alt="worldtrip" width={184} height={46} />
    </Flex>
  )
}