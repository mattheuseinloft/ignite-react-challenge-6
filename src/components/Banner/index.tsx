import { Flex, Box, Text, Image } from '@chakra-ui/react'

export function Banner() {
  return (
    <Box h="335px">
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
        <Box color="#F5F8FA">
          <Text fontSize={36} fontWeight="medium" textDecoration="underline">5 Continentes,<br/>infinitas possibilidades. </Text>
          <Text fontSize={20} fontWeight="regular" marginTop="20px">Chegou a hora de tirar do papel a viagem que você<br/>sempre sonhou.</Text>
        </Box>
        <Image src="/images/banner-airplane.png" alt="airplane" width="417px" height="270" marginTop="80px" style={{ transform: "rotate(3deg)" }} />
      </Flex>
    </Box>
  )
}