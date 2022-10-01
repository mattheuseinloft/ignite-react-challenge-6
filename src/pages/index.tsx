import type { NextPage } from 'next'

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <Banner />

      <h1>Tipos de viagem</h1>

      <h1>CTA Selecionar continente</h1>
    </>
  )
}

export default Home
