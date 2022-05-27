import React from 'react'
import FortuneItem from '../../../Components/Fortune/FortuneItem'

function Fortune() {
  return (
    <section className="fortune">
        <h3 className="title-block">Испытай удачу</h3>
        <div className="flex">
          <FortuneItem 
            dataAos="zoom-in"
            dataAosDuration="500"
            mainImageUrl="img/fortune/Union.png"
            absolutImageUrl="img/fortune/Mask Group (2).png"
            absolutImageClass="fortune__absolute-1"
            title="EPIC"
            titleClass="fortune__title-1"
            countGame="800"
            profitCase="130%"
            startPrice="900"
            priceMain="500"
            priceOld="900"
          />
          <FortuneItem 
            dataAos="zoom-in"
            dataAosDuration="800"
            mainImageUrl="img/fortune/Union (1).png"
            absolutImageUrl="img/fortune/Mask Group (1).png"
            absolutImageClass="fortune__absolute-2"
            title="COMMON"
            titleClass="fortune__title-2"
            countGame="800"
            profitCase="130%"
            startPrice="900"
            priceMain="400"
            priceOld="900"
          />
          <FortuneItem 
            dataAos="zoom-in"
            dataAosDuration="1100"
            mainImageUrl="img/fortune/Union (2).png"
            absolutImageUrl="img/fortune/Mask Group.png"
            absolutImageClass="fortune__absolute-3"
            title="LEGEND"
            titleClass="fortune__title-3"
            countGame="800"
            profitCase="130%"
            startPrice="900"
            priceMain="400"
            priceOld="1200"
          />
        </div>
      </section>
  )
}

export default Fortune
