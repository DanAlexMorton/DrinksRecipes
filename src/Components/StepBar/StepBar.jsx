import React from "react"
import { Link, useLocation } from "../Router"

export default function StepBar() {
    const { kind, id } = useLocation( 'kind/id' )

    return (
        <div className='ToolBar'>
            <Link path={[kind, id, 'StepOne']}>
                <span>Step 1</span>
            </Link>
            <Link path={[kind, id, 'StepTwo']}>
                <span>Step 2</span>
            </Link>
            <Link path={[kind, id, 'StepThree']}>
                <span>Step 3</span>
            </Link>
            <Link path={[kind, id, 'StepFour']}>
                <span>Step 4</span>
            </Link>
        </div>
    )
}