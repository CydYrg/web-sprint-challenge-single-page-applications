import React, { useState, useEffect } from 'react'
import data from '../data'
import { Route, Link, Switch } from 'react-router-dom'


// We'll need React Router's own version of the History API
import { useHistory } from 'react-router-dom'
export default function Home() {
    // 👉 STEP 5 - Build a click handler that will imperatively
    // navigate us to <website base URL>/items-list
    const history = useHistory()


    function fetchStock() {
        // fetchStock simulates getting data through axios.get(<URL>)
        return Promise.resolve({ success: true, data })
    }

    const routeToPizza = () => {
        console.log('Submitting something to go to next page')
        history.push('/order-pizza')
    }

    const [stock,
        setStock] = useState([])

    useEffect(() => {
        fetchStock().then(res => setStock(res.data)
        )
    },
    )

    return (
        <div className='home-wrapper'>
            <h1>Lambda Eats</h1>    
            <img
                className='home-image'
                src='https://source.unsplash.com/F6-U5fGAOik'
                alt=''
            />

            <button
                onClick={routeToPizza}
                className='md-button shop-button order-pizza'
            >
                Pizza??
            </button>

            <div className='items-list-wrapper'>
                {stock.map(item => (
                    <div
                        className='item-card'
                        key={item.id}
                    >
                        {/* 👉 STEP 6 - Link starts, navigates us from <current url> to <current url>/<id of the item> */}
                        <Link to={`/items-list/${item.id}`}>
                            <img
                                className='items-list-image'
                                src={item.imageUrl}
                                alt={item.name}
                            />
                            <p>{item.name}</p>
                        </Link>
                        {/* Link ends */}

                        <p>{item.price}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}
