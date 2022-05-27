import React from 'react'

function Fortune() {
  return (
    <section className="fortune">
        <h3 className="title-block">Испытай удачу</h3>
        <div className="flex">
          <div className="fortune__item" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500">
            <img className="fortune__img" src="img/fortune/Union.png" alt=""/>
            <img className="fortune__absolute-1" src="img/fortune/Mask Group (2).png" alt=""/>
            <div className="fortune__title-1">EPIC</div>
            <div className="fortune__desc">
              <div className="fortune__desc-item">
                <span>800</span> игр
              </div>
              <div className="fortune__desc-item">
                <span>130%</span> профит
              </div>
              <div className="fortune__desc-item">игры от <span>$ 900</span>
              </div>
            </div>
            <div className="fortune__discount">- 30%</div>
            <div className="fortune__price">
              <div className="fortune__price-main">$ 800</div>
              <div className="fortune__price-old">$ 800</div>
            </div>
          </div>
          <div className="fortune__item" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="800">
            <img className="fortune__img" src="img/fortune/Union (1).png" alt=""/>
            <img className="fortune__absolute-2" src="img/fortune/Mask Group (1).png" alt=""/>
            <div className="fortune__title-2">COMMON</div>
            <div className="fortune__desc">
              <div className="fortune__desc-item">
                <span>800</span> игр
              </div>
              <div className="fortune__desc-item">
                <span>130%</span> профит
              </div>
              <div className="fortune__desc-item">игры от <span>$ 900</span>
              </div>
            </div>
            <div className="fortune__discount">- 30%</div>
            <div className="fortune__price">
              <div className="fortune__price-main">$ 800</div>
              <div className="fortune__price-old">$ 800</div>
            </div>
          </div>
          <div className="fortune__item" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1100">
            <img className="fortune__img" src="img/fortune/Union (2).png" alt=""/>
            <img className="fortune__absolute-3" src="img/fortune/Mask Group.png" alt=""/>
            <div className="fortune__title-3">LEGEND</div>
            <div className="fortune__desc">
              <div className="fortune__desc-item">
                <span>800</span> игр
              </div>
              <div className="fortune__desc-item">
                <span>130%</span> профит
              </div>
              <div className="fortune__desc-item">игры от <span>$ 900</span>
              </div>
            </div>
            <div className="fortune__discount">- 30%</div>
            <div className="fortune__price">
              <div className="fortune__price-main">$ 800</div>
              <div className="fortune__price-old">$ 800</div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Fortune
