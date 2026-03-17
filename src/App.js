import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

import styled from 'styled-components'

const StyledContent = styled.div`
  height: 100%;
  max-width: 68.75rem;
  margin: auto;
  padding-bottom: 12rem;

  @media (max-width: 71.25rem) {
    margin: 0 1rem;
  }
`

const App = () => {
  return (
    <>
      <Navbar />
      <StyledContent>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </StyledContent>
      <Footer />
    </>
  )
}

export default App
