import type { NextPage } from 'next'
import { Flex, Divider, Center, Text, Stack } from '@chakra-ui/react'

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { TripType } from '../components/TripType';
import { Slider } from '../components/Slider';

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <Banner />

      <Flex as="div" justify="space-between" mx="140px" mt="80px">
        <TripType
          icon={{ src: '/images/icon-cocktail.svg', alt: 'cocktail' }}
          title="vida noturna"
        />
        <TripType
          icon={{ src: '/images/icon-surf.svg', alt: 'surf' }}
          title="praia"
        />
        <TripType
          icon={{ src: '/images/icon-building.svg', alt: 'building' }}
          title="moderno"
        />
        <TripType
          icon={{ src: '/images/icon-museum.svg', alt: 'museum' }}
          title="clássico"
        />
        <TripType
          icon={{ src: '/images/icon-earth.svg', alt: 'earth' }}
          title="e mais..."
        />
      </Flex>

      <Center mt="80px">
        <Divider w="90px" h="2px" bgColor="#47585B" />
      </Center>

      <Center mt="52px">
        <Text align="center" fontSize="36px" fontWeight="medium" color="#47585B">
          Vamos nessa?<br />Então escolha seu continente
        </Text>
      </Center>

      <Center mt="52px" px="100px" mb="40px">
        <Slider />
      </Center>
    </>
  )
}

export default Home
