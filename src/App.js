import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import Guides from './pages/Guides'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/portfolio' exact component={Portfolio} />
        <Route path='/blog' exact component={Blog} />
        <Route path='/guides' exact component={Guides} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
