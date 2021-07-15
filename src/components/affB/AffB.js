import React from 'react'
import './AffB.css'

function AffB(props) {
    const {inc, dec} = props
    return (
        <div>
            
            <button className="btn-btn-bleu" onClick={dec}>-</button>
            <button className="btn-btn-grey" onClick={inc}>+</button>

        </div>
    )
}


export default AffB;