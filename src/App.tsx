import { MotionConfig } from 'motion/react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { Approach } from './components/Approach'
import { Expertise } from './components/Expertise'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <Work />
        <Approach />
        <Expertise />
        <About />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App
