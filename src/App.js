import React from 'react'
import Header from './components/Header/header';
import Topcontainer from './components/Topcontainer/topcontainer';
import Skill from './components/skillContainer/skillContainer';
import Profile from './components/Profile/profile'
import Experence from './components/Experence/experences'
import Contact from './components/Contactme/contactme'

function App() {
  return (
    <div>
      <Header/>
      <Topcontainer />
      <Profile />
      <Skill />
      <Experence />
      <Contact /> 
    </div>
  )
}

export default App
