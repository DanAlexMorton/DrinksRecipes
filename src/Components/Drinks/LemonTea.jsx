import React, { Fragment } from "react"
import { useLocation } from "../Router"
import StepBar from "../StepBar/StepBar"

export default function LemonTea() {
    const {kind, drinkID, tab, popup} = useLocation( 'kind/drinkID/tab=StepOne/popup' )

    return(
        <Fragment>
            <h1> Lemon Tea Recipe: </h1>
            <StepBar />
            { tab==='StepOne' &&
                <div>
                    <h2> - Boil some water</h2>
                </div>
            }
            { tab==='StepTwo' &&
                <div>
                    <h2> - Steep the water in the tea</h2>
                </div>
            }
            { tab==='StepThree' &&
                <div>
                    <h2> - Pour tea in the cup</h2>
                </div>
            }
            { tab==='StepFour' &&
                <div>
                    <h2> - Add lemon and enjoy</h2>
                </div>
            }
        </Fragment>
    )
}