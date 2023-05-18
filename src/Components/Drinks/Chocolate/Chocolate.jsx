import React from "react"
import { useLocation } from "../../Router"
import StepBar from "../../StepBar/StepBar"
import './Chocolate.sass'

export default function Chocolate() {
    const {kind, drinkID, tab, popup} = useLocation( 'kind/drinkID/tab=StepOne/popup' )

    return(
        <div className='ChocolateScreen'>
            <h1> Chocolate Recipe </h1>
            <StepBar />
            { tab==='StepOne' &&
                <div>
                    <h2> - Boil some water</h2>
                </div>
            }
            { tab==='StepTwo' &&
                <div>
                    <h2> - Add drinking chocolate powder to the water</h2>
                </div>
            }
            { tab==='StepThree' &&
                <div>
                    <h2> - Pour chocolate in the cup</h2>
                </div>
            }
            { tab==='StepFour' &&
                <div>
                    <h2> - Enjoy</h2>
                </div>
            }
        </div>
    )
}