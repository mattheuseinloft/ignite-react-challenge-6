import { Flex, Box, Text, Image } from '@chakra-ui/react'

export function Banner() {
  return (
    <Box h={368}>
      <Flex
        as="div"
        align="center"
        justify="space-between"
        px={140}
        h={335}
        bgImage="/images/banner-background.jpg"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Box color="#F5F8FA" textDecoration="underline">
          <Text fontSize={36}>5 Continentes,<br/>infinitas possibilidades. </Text>
          <Text fontSize={20}>Chegou a hora de tirar do papel a viagem que você<br/>sempre sonhou.</Text>
        </Box>
        <Image src="/images/banner-airplane.png" alt="airplane" marginTop={28} />
      </Flex>
    </Box>
  )
}