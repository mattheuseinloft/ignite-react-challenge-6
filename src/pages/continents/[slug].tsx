import { useRouter } from 'next/router'
import { Flex, Text, HStack, Box, Image, Avatar } from '@chakra-ui/react'

import { Header } from '../../components/Header';

export default function Continent() {
  const router = useRouter()
  const { slug } = router.query

  const getContinentData = (slug: string) => {
    switch (slug) {
      // case 'europe':
      default:
        return {
          title: 'Europa',
          info: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
          countriesCount: 50,
          languagesCount: 60,
          citiesPlus100Count: 27,
          citiesPlus100: [
            { name: 'Londres', country: 'Reino Unido', flag: '/images/continentData/europe/uk-flag.png', image: '/images/continentData/europe/uk-city.png' },
            { name: 'Paris', country: 'França', flag: '/images/continentData/europe/fr-flag.png', image: '/images/continentData/europe/fr-city.png' },
            { name: 'Roma', country: 'Itália', flag: '/images/continentData/europe/it-flag.png', image: '/images/continentData/europe/it-city.png' },
            { name: 'Praga', country: 'República Tcheca', flag: '/images/continentData/europe/cz-flag.png', image: '/images/continentData/europe/cz-city.png' },
            { name: 'Amsterdã', country: 'Holanda', flag: '/images/continentData/europe/ne-flag.png', image: '/images/continentData/europe/ne-city.png' }
          ],
        }
    }
  }

  const continent = getContinentData(slug as string)

  return (
    <>
      <Header showReturnArrow />

      <Flex
        as="div"
        h={500}
        px={140}
        paddingTop={369}
        bgGradient={`linear(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('/images/${slug}.jpg')`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="100% 50%"
      >
        <Text color="#F5F8FA" fontSize="48px" fontWeight="semibold">{continent?.title}</Text>
      </Flex>

      <Flex my="80px" mx="140px" justifyContent="space-between">
        <Text color="#47585B" fontSize="24px" fontWeight="regular" width="600px" textAlign="justify">{continent?.info}</Text>
        <HStack spacing="42px">
          <Box textAlign="center">
            <Text color="#FFBA08" fontSize="48px" fontWeight="600">{continent?.countriesCount}</Text>
            <Text color="#47585B" fontSize="24px" fontWeight="600">países</Text>
          </Box>
          <Box textAlign="center">
            <Text color="#FFBA08" fontSize="48px" fontWeight="600">{continent?.languagesCount}</Text>
            <Text color="#47585B" fontSize="24px" fontWeight="600">línguas</Text>
          </Box>
          <Box textAlign="center">
            <Text color="#FFBA08" fontSize="48px" fontWeight="600">{continent?.citiesPlus100Count}</Text>
            <Text color="#47585B" fontSize="24px" fontWeight="600">cidades +100</Text>
          </Box>
        </HStack>
      </Flex>

      <Box mx="140px" marginBottom="35px">
        <Text fontSize="36px" fontWeight="medium" color="#47585B">
          Cidades +100
        </Text>

        <Flex as="div" flexWrap="wrap" gap="45px">
          {continent?.citiesPlus100.map((city, index) => (
            <Box key={index} width="256px" height="279px">
            <Image src={city.image} alt='teste' borderTopRadius={4} />
            <Box display="flex" justifyContent="space-between" alignItems="center" backgroundColor="#FFFFFF" border="1px solid #FFBA08" borderBottomRadius={4} padding="18px 24px 24px 24px">
              <Box>
                <Text color="#47585B" fontSize="20px" fontWeight="semibold" lineHeight="25px">{city.name}</Text>
                <Text color="#999999" fontSize="16px" fontWeight="medium" lineHeight="25px" marginTop="12px">{city.country}</Text>
              </Box>
              <Avatar src={city.flag} size="sm" />
            </Box>
          </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
}