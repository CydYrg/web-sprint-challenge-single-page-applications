import React from 'react'

import { useHistory } from 'react-router-dom'

import PizzaForm from './PizzaForm'

export default function Pizza() {

    const history = useHistory()

    const routeToShop = () => {
        console.log('Submitting something to go to next page')
        history.push('/items-list')
    }

    return (
        <div className='home-wrapper'>
            <h1 className='store-header'>Pizza Order Page</h1>
            <h1>PIZZA FORM BELOW</h1>


        </div>




    )
}


