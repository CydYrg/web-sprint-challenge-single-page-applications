import React, { useState, useEffect } from 'react'
import Form from './PizzaForm'
import axios from 'axios'

const quotesURL = 'https://reqres.in/api/orders'

const initialFormState = {
  size: '',
  text: '',
  
}

export default function Container() {
  
  const [form, setForm] = useState([])
  const [formValues, setFormValues] = useState(initialFormState)


  const getPizza = () => {
    axios.get(quotesURL)
      .then(response => {
        setQuotes(response.data)
      })
      .catch(handleError)
  }

  const postPizza = ({ size, text }) => {
    axios.post(pizzaURL, { size, text })
      .then(res => setQuotes(quotes.concat(res.data)))
      .catch(handleError)
      .finally(resetForm)
  }

  const putQuote = ({ size, text }) => {
    axios.put(`${quotesURL}/${id}`, { size, text })
      .then(res => {
        setQuotes(quotes.map(quote => {
          return quote.size === size ? res.data : pizza
        }))
      })
      .catch(handleError)
      .finally(resetForm)
  }


  const handleError = err => { debugger } 

  const resetForm = () => setFormValues(initialFormState)

 
  useEffect(() => getQuotes(), [])

  return (
    <div className='container'>
      <h3>pizza/h3>
      <ul>
        
      </ul>
      <Form
        values={formValues}
        setValues={setFormValues}
        submitHandlers={{ postPizza, putPizza }}
        reset={resetForm}
      />
    </div>
  )
}
