import React from 'react';

import '../components/buttonShopHover.css'

const Button = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-sm-6">
                    <div className="ih-item circle effect2 left_to_right">
                        <a href="javascript:void" onClick={props.handleChangeProduct}>
                            <div className="img">
                                <img src={props.article.image} alt="img" />
                            </div>
                            <div className="info">
                                <h3 >{props.article.productName} </h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Button




