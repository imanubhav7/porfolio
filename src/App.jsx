import React from 'react'
import Hero from './components/sections/Hero'
import Snowfall from 'react-snowfall'
import Projects from './components/sections/Projects'
import NavBar from './components/NavBar'
import Experience from './components/sections/Experience'
import QuoteSection from './components/QuoteSection'
import TechStack from './components/sections/TechStack'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'


const App = () => {
  return (
    <>
      <Snowfall
        snowflakeCount={100}
        speed={[0.3, 3]}
        wind={[0.5, 0.3]}
      />
      <NavBar />
      <Hero />
      <Projects />
      {/* <QuoteSection/> */}
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </>
  )
}

export default App
