import React from 'react'
import './AffC.css'

function AffC(props) {
    const {compte} = props
    return (
        <div>
            <h1>Compteur</h1>
            <span className="Cmpt">{(compte >9) ? compte : '' }
            {(compte <0) ? compte : '' }
            {(compte >=0 && compte <10) ? '0'+ compte : '' }</span>
        </div>
    )
}


export default AffC;