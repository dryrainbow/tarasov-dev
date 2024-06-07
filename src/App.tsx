import type { Component } from 'solid-js'

import Controls from './components/Controls'
import Hero from './components/Hero'
import Projects from './components/Projects/Projects'
import ContactForm from './components/ContactForm'

const App: Component = () => {
  return (
    <div class='App'>
      <Controls />
      <Hero />
      <Projects />
      <ContactForm />
    </div>
  )
}

export default App
  