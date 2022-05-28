import React from 'react'

const BigSlider = (props) => {
  return (
    <>
        <img className="desk" src="img/top-slider-right.png" alt=""/>
        <img className="mob" src="img/top-slider/Rectangle 45.png" alt=""/>
        <h2>{props.title}</h2>
        <div className="main-slider__price">
            <div className="main-slider__price-main">
            <div className="main-slider__price-txt">{props.priceMain}₽</div>
            <div className="main-slider__price-sell">-{100-(Math.round((props.priceMain * 100) / props.priceOld))}%</div>
            </div>
            <div className="main-slider__price-old">{props.priceOld}₽</div>
        </div>
    </>
  )
}

export default BigSlider
