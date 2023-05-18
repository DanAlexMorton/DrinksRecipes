import React from "react"
import { Link, useLocation } from "../Router"
import './StepBar.sass'

export default function StepBar() {
    const { kind, id } = useLocation( 'kind/id' )

    return (
        <div className='StepBar'>
            <Link className='Step' path={[kind, id, 'StepOne']}>
                <button>Step 1</button>
            </Link>
            <Link className='Step' path={[kind, id, 'StepTwo']}>
                <button>Step 2</button>
            </Link>
            <Link className='Step' path={[kind, id, 'StepThree']}>
                <button>Step 3</button>
            </Link>
            <Link className='Step' path={[kind, id, 'StepFour']}>
                <button>Step 4</button>
            </Link>
        </div>
    )
}