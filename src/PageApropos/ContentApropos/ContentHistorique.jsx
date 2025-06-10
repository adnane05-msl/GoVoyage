import React from 'react'
import './ContentHistorique.css'

function ContentHistorique(props) {
    return (
        <div className={`ContentHistorique ${props.position ? 'right-aligned' : 'left-aligned'}`}>
            <div className="image-historique">
                <img src={props.img} alt={props.nom} />
            </div>
            <div className="text">
                <h5 className="sous-titre">{props.sousTitre}</h5>
                <p className="paragraphe">{props.text}</p>
            </div>
        </div>
    )
}

export default ContentHistorique