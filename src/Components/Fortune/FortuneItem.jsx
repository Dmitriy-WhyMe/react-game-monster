import React from 'react'

const FortuneItem = (props) => {
  return (
    <div className="fortune__item" data-aos={props.dataAos} data-aos-easing="linear" data-aos-duration={props.dataAosDuration}>
        <img className="fortune__img" src={props.mainImageUrl} alt=""/>
        <img className={props.absolutImageClass} src={props.absolutImageUrl} alt=""/>
        <div className={props.titleClass}>{props.title}</div>
        <div className="fortune__desc">
            <div className="fortune__desc-item">
                <span>{props.countGame}</span> игр
            </div>
            <div className="fortune__desc-item">
                <span>{props.profitCase}</span> профит
            </div>
            <div className="fortune__desc-item">игры от <span>$ {props.startPrice}</span></div>
        </div>
        <div className="fortune__discount">-{100-(Math.round((props.priceMain * 100) / props.priceOld))}%</div>
        <div className="fortune__price">
            <div className="fortune__price-main">$ {props.priceMain}</div>
            <div className="fortune__price-old">$ {props.priceOld}</div>
        </div>
    </div>
  )
}

export default FortuneItem
