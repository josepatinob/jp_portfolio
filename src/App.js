import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Guides from './pages/Guides'

import styled from 'styled-components'

const StyledContent = styled.div`
  height: 100%;
  max-width: 68.75rem;
  margin: auto;
`

const App = () => {
  return (
    <>
      <Navbar />
      <StyledContent>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/guides" exact component={Guides} />
        </Switch>
      </StyledContent>
      <Footer />
    </>
  )
}

export default App
