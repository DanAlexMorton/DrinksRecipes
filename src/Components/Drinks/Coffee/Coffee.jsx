import React from 'react'
import { useLocation } from '../../Router'
import StepBar from '../../StepBar/StepBar'
import './Coffee.sass'

export default function Coffee() {
    const {kind, drinkID, tab, popup} = useLocation( 'kind/drinkID/tab=StepOne/popup' )

    return(
        <div className='CoffeeScreen'>
            <h1> Coffee Recipe: </h1>
            <StepBar />
            { tab==='StepOne' &&
                <div>
                    <h2> - Boil some water</h2>
                </div>
            }
            { tab==='StepTwo' &&
                <div>
                    <h2> - Brew the coffee grounds</h2>
                </div>
            }
            { tab==='StepThree' &&
                <div>
                    <h2> - Pour coffee in the cup</h2>
                </div>
            }
            { tab==='StepFour' &&
                <div>
                    <h2> - Add sugar and milk and enjoy</h2>
                </div>
            }
        </div>
    )
}