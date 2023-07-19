import Head from 'next/head'
import Image from 'next/image'
import MovieSearch from './components/MovieSearch'

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Head >
        <title>Movie database</title>
        <meta name='description' content='A simple database for movies' />
      </Head>

      <main className='container mx-auto py-10 px-4 flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold mb-8 text-white'>Movie Database</h1>
        <MovieSearch/>
      </main>
    </div>
  )
}
