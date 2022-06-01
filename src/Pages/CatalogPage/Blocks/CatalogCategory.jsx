import React from 'react'

const CatalogCategory = ({value,onChangeCategory}) => {
  const categories = [
    {
        title: "Все",
        linkImg: "img/genre/image.png"
    },
    {
        title: "Экшены",
        linkImg: "img/genre/Mask Group (1).png"
    },
    {
        title: "Шутеры",
        linkImg: "img/genre/Layer 1 copy 2.png"
    },
    {
      title: "Приключения",
      linkImg: "img/genre/Mask Group.png"
    },
    {
      title: "Стратегии",
      linkImg: "img/genre/image.png"
    },
    {
      title: "Гонки",
      linkImg: "img/genre/Mask Group (1).png"
    },
    {
      title: "Спортивные",
      linkImg: "img/genre/Layer 1 copy 2.png"
    },
  ]
  return (
    <section className="genre">
      {
        categories.map(
            ( obj,index ) => 
                <button key={index}>
                  <img src={obj.linkImg} alt=""/>
                  <div className="genre__title">{obj.title}</div>
                </button>
        )
      }
    </section>
  )
}

export default CatalogCategory
