import React from "react"
import { Link } from './Router'
import DrinksScreen from "./DrinksScreen/DrinksScreen"

export default function Tree() {
    
    return(
        <div className='Tree'>
            <DrinksScreen/>
            <ul>
                <li>
                    <details>
                        <summary>
                            <Link path={[ 'mainPage' , 0 ]}>Drinks</Link>
                        </summary>
                        <ul>
                            <li>
                                <Link path={[ 'LemonDrink' , 1 ]}>Lemon Tea</Link>
                            </li>
                            <li>
                                <Link path={[ 'CoffeeDrink' , 2 ]}>Coffee</Link>
                            </li>
                            <li>
                                <Link path={[ 'ChocolateDrink' , 3 ]}>Chocolate</Link>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    )
}