import './globals.css'
import Header from '@/components/Layout/Header'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <main className="flex flex-col items-center w-full m-0 p-0">
        <Hero />
      </main>
    </div>
  )
}
