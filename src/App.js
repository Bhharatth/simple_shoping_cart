import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Cart from './components/Cart'
import Header from './components/Header'
import Home from './components/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <div>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/Cart' exact>
          <Cart/>
        </Route>
      </div>
    </BrowserRouter>
    
  )
}

export default App
