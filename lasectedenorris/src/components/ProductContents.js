import React from 'react'

import '../Style.css'



const ProductContents = (props) => {
    return (
        <>
        <div>
            <div className="titleProduct">
                <p>{props.article.productName}</p>
            </div>

            <div className="descriptifProduct">
                <p>{props.article.descriptif}</p>

            </div>
            <div className="ButtonProduct">
            <a class="button" href={props.article.link}>Vente en ligne</a>
            </div>
            </div>
        </>
    )
}

export default ProductContents