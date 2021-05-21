import React, { useState, useEffect } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import Home from './components/Home'
import Item from './components/Item'
import Pizza from './components/Pizza'

import data from './data'

function fetchStock() {
  // fetchStock simulates getting data through axios.get(<URL>)
  return Promise.resolve({ success: true, data })
}

const App = () => {
  
  const [stock,
    setStock] = useState([])

  useEffect(() => {
    fetchStock().then(res => setStock(res.data)
    )
  },
  )

  //console.log(stock)

  return (
    <div className='App'>
      <nav>
        <h1 className='store-header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/items-list'>Help</Link>
        </div>
      </nav>
            
      <Switch>
        <Route exact path="/items-list/:itemID">
          <Item items={stock} />
        </Route>
        <Route exact path='/order-pizza' component={Pizza} />
        <Route exact path='/' component={Home} />
        
      </Switch>

    </div> );
};
export default App;
