import React from 'react'

import { useParams, NavLink, useRouteMatch, Route, Router } from 'react-router-dom'


export default function Item(props) {

    const { items } = props
    const { url, path } = useRouteMatch()
    console.log(url)
    console.log(path)
    
    const { itemID } = useParams()
    const item = items.find(item => item.id == itemID)

    if (!items.length) return 'Fetching items...'

    return (
        <div className='item-wrapper'>
            <div className='item-header'>
                <div className='image-wrapper'>
                    <img src={item.imageUrl} alt={item.name} />
                </div>
                <div className='item-title-wrapper'>
                    <h2>{item.name}</h2>
                    <h4>${item.price}</h4>
                </div>
            </div>

            <nav className='item-sub-nav'>
                
                <NavLink to={`${url}/description`}>Description</NavLink>
                <NavLink to={`${url}/shipping`}>Shipping</NavLink>
            </nav>


        </div>
    )
}