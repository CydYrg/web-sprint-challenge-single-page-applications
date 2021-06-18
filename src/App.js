import React, { useState, useEffect } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import Home from './component/Home.js'
import Item from './component/Item.js'
import Pizza from './component/Pizza.js'

//import data from './data'

function fetchStock() {
  
  return Promise.resolve({ success: true, /*data*/ })
}

const App = () => {
  const [stock,
    setStock] = useState([])

  useEffect(() => {
    fetchStock().then(res => setStock(res./*data*/)
    )
  },
  )
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>LETS HAVE SOME PIZZA</p>
    </>
  );
};
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
    <Item items={''} />
  </Route>
  <Route exact path='/order-pizza' component={Pizza} />
  <Route exact path='/' component={Home} />

</Switch>

</div> 

export default App;
