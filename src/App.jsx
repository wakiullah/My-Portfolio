import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Thankyou from './Components/Thankyou'

function App() {

  return (
    <>
      <div className='mx-auto  text-left min-h-screen max-w-screen-xl pt-12 font-mono md:px-12 md:py-16 lg:px-20 lg:py-0'>
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <main className='pt-24 lg:w-1/2 lg:pt-20 lg:pb-10'>
            <Hero />
            <Skills />
            <Projects />
            <Education />
            <Thankyou />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
