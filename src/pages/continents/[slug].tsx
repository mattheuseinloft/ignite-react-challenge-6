import { useRouter } from 'next/router'

import { Header } from '../../components/Header';

export default function Continent() {
  const router = useRouter()
  const { slug } = router.query

  const continent = {
    title: slug === 'north-america' ? 'América do Norte' : 
    'europe' ? 'Europa' : 'Outro'
  }
  
  return (
    <>
      <Header showReturnArrow />

      <h1>{continent.title}</h1>
    </>
  );
}