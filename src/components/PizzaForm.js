import React from 'react'

export default function FriendForm(props) {
    const {
        value,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
        const { size, sauce, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : pizza
        change(pizza, valueToUse)
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a Friend</h2>

                {/* 🔥 DISABLE THE BUTTON */}
                <button disabled={disabled}>submit</button>

                <div className='errors'>
                   
                    <div>{errors.size}</div>
                    <div>{errors.sauce}</div>
                    <div>{errors.topping}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h4>General information</h4>

                {/* ////////// TEXT INPUTS ////////// */}
                {/* ////////// TEXT INPUTS ////////// */}
                {/* ////////// TEXT INPUTS ////////// */}
                <label>Username&nbsp;
          <input
                        value={values.pizza}
                        onChange={onChange}
                        name='pizza'
                        type='text'
                    />
                </label>

                <label>Email
          <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                    />
                </label>

                {/* ////////// DROPDOWN ////////// */}
                {/* ////////// DROPDOWN ////////// */}
                {/* ////////// DROPDOWN ////////// */}
                <label>Size
          <select
                        onChange={onChange}
                        value={values.size}
                        name='size'
                    >
                        <option value=''>- Select an option -</option>
                        <option value='large'>Large</option>
                        <option value='medium'>Medium</option>
                        <option value='small'>Small</option>
                    </select>
                </label>

                {/* ////////// RADIO BUTTONS ////////// */}
                {/* ////////// RADIO BUTTONS ////////// */}
                {/* ////////// RADIO BUTTONS ////////// */}
                <label>Original Red
          <input
                        type='radio'
                        name='sauce'
                        value='original red'
                        onChange={onChange}
                        checked={values.sauce === 'original red'}
                    />
                </label>
                <label>Garlic Ranch
          <input
                        type='radio'
                        name='sauce'
                        value='garlic ranch'
                        onChange={onChange}
                        checked={values.civil === 'garlic ranch'}
                    />
                </label>
                <label>BBQ Sauce
          <input
                        type='radio'
                        name='sauce'
                        value='bbq sauce'
                        onChange={onChange}
                        checked={values.civil === 'bbq sauce'}
                    />
                </label>             <label>Spinach Alfredo(need to type this on next line) 
          <input
                        type='radio'
                        name='sauce'
                        value='spinach alfredo'
                        onChange={onChange}
                        checked={values.sauce === 'spinach alfredo'}
                    />
                </label>
            </div>

            <div className='form-group checkboxes'>
                <h4>Build your Own Pizza</h4>

                {/* ////////// CHECKBOXES ////////// */}
                {/* ////////// CHECKBOXES ////////// */}
                {/* ////////// CHECKBOXES ////////// */}
                <label>Pepperoni
          <input
                        type='checkbox'
                        name='pepperoni'
                        checked={values.pepperoni}
                        onChange={onChange}
                    />
                </label>
                <label>Sausage
          <input
                        type='checkbox'
                        name='sausage'
                        checked={values.sausage}
                        onChange={onChange}
                    />
                </label>
                <label>Canadian Bacon
          <input
                        type='checkbox'
                        name='canadian bacon'
                        checked={values.canadianBacon}
                        onChange={onChange}
                    />
                </label>      
                <label>Spicy Italian Sausage
          <input
                        type='checkbox'
                        name='spicyItalianSausage'
                        checked={values.spicyItalianSausage}
                        onChange={onChange}
                    />
                </label>      
                <label>Grilled Chicken
          <input
                        type='checkbox'
                        name='grilled chicken'
                        checked={values.grilledChicken}
                        onChange={onChange}
                    />
                </label>      
                <label>Onions
          <input
                        type='checkbox'
                        name='onions'
                        checked={values.onions}
                        onChange={onChange}
                    />
                </label>        
                <label>Green Pepper
          <input
                        type='checkbox'
                        name='green pepper'
                        checked={values.greenPepper}
                        onChange={onChange}
                    />
                </label>          
                <label>Diced Tomatos
          <input
                        type='checkbox'
                        name='Diced Tomatos'
                        checked={values.dicedTomatos}
                        onChange={onChange}
                    />
                </label>         
                <label>Black Olives
          <input
                        type='checkbox'
                        name='black olives'
                        checked={values.blackOlives}
                        onChange={onChange}
                    />
                </label>        
                <label>Roasted Garlic
          <input
                        type='checkbox'
                        name='roasted garlic'
                        checked={values.roastedGarlic}
                        onChange={onChange}
                    />
                </label>      
                <label>Arthichoke Heart
          <input
                        type='checkbox'
                        name='arthichokeHeart'
                        checked={values.arthichokeHeart}
                        onChange={onChange}
                    />
                </label>
                <label>Three Cheese
          <input
                        type='checkbox'
                        name='three cheese'
                        checked={values.threeCheese}
                        onChange={onChange}
                    />
                </label>   
                <label>Pineapple
          <input
                        type='checkbox'
                        name='pineapple'
                        checked={values.pineapple}
                        onChange={onChange}
                    />
                </label>   
                <label>Extra Cheese
          <input
                        type='checkbox'
                        name='extra cheese'
                        checked={values.extraCheese}
                        onChange={onChange}
                    />
                </label>
            </div>
        </form>
    )
}
