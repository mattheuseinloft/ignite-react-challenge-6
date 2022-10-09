import Link from 'next/link'
import { Center, Text, VStack } from '@chakra-ui/react'

interface SlideContentProps {
  slug: string
  title: string
  subtitle: string
  bgPosition: string
}

export function SlideContent({ slug, title, subtitle, bgPosition }: SlideContentProps) {
  return (
    <Center
      w="1240px"
      h="450px"
      bgGradient={`linear(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('/images/${slug}.jpg')`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition={bgPosition}
    // Mover um pouco abaixo, não deve ficar 100% centralizado
    >
      <Link key={slug} href={`/continents/${slug}`} passHref>
        <a>
          <VStack spacing="16px">
            <Text color="#F5F8FA" fontSize="48px" fontWeight="bold">{title}</Text>
            <Text color="#DADADA" fontSize="24px" fontWeight="bold">{subtitle}</Text>
          </VStack>
        </a>
      </Link>
    </Center>
  )
}