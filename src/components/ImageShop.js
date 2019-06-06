import React from 'react';


const ImageShop = (props) => {
  return (
    <>
      <div className="contenair-image-product">
        <img className="image-product" alt="" src={props.article.image}></img>
      </div>
    </>
  )
}

export default ImageShop


