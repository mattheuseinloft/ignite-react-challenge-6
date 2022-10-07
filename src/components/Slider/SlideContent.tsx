import { Center, Text, Image, VStack } from '@chakra-ui/react'

interface SlideContentProps {
  imageUrl: string
  title: string
  subtitle: string
  bgPosition: string
}

export function SlideContent({ imageUrl, title, subtitle, bgPosition }: SlideContentProps) {
  return (
    <Center
      w="1240px"
      h="450px"
      bgGradient={`linear(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('${imageUrl}')`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition={bgPosition}
    // Mover um pouco abaixo, não deve ficar 100% centralizado
    >
      <VStack spacing="16px">
        <Text color="#F5F8FA" fontSize="48px" fontWeight="bold">{title}</Text>
        <Text color="#DADADA" fontSize="24px" fontWeight="bold">{subtitle}</Text>
      </VStack>
    </Center>
  )
}