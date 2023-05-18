import React from 'react'
import { useLocation } from '../Router'
import './DrinksScreen.sass'

export const MainPage = () => {
    const {kind, drinkID, tab, popup} = useLocation( 'kind=mainPage' )

    return(
        <div className='MainPage'>  
            <h1 >Welcome to the drinks recipe guide!</h1>
            <h2>You have a choice of Lemon Tea, Coffee and Chololate </h2>
            <p>By Daniel Morton</p>
        </div>
    )
}

export default function DrinksScreen() {
    
    return(
        <div className='DrinksScreen'>
            <h1>The Drinks Machine</h1>
            <h4>Please select a drink from the list!</h4>
        </div>
    )
}
