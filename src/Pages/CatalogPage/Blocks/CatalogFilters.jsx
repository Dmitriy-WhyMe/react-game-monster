import React from 'react'

const CatalogFilters = ({
  valuePopular, 
  onChangeSortPopular,
  valuePlatform,
  onChangeFilterPrice,
  valuePrice,
  onChangeSortPrice
}) => {

  const [openPopular, setOpenPopular] = React.useState(false)
  const listPopular = [
    {name: 'Desk', sortPopularProperty: 'rating'}, 
    {name: 'Asc', sortPopularProperty: '-rating'}, 
  ]
  const onClickListPopular = (i) => {
    onChangeSortPopular(i)
    setOpenPopular(false)
  }

  const [openPrice, setOpenPrice] = React.useState(false)
  const listPrice = [
    {name: 'Desk', sortPriceProperty: 'priceMain'}, 
    {name: 'Asc', sortPriceProperty: '-priceMain'}, 
  ]
  const onClickListPrice = (i) => {
    onChangeSortPrice(i)
    setOpenPrice(false)
  }

  const [openPlatform, setOpenPlatform] = React.useState(false)
  const listPlatform = [
    {name: 'Все', filterPriceProperty: 'Все'},
    {name: 'Steam', filterPriceProperty: 'Steam'}, 
    {name: 'Origin', filterPriceProperty: 'Origin'}, 
  ]
  const onClickListPlatfrom = (i) => {
    onChangeFilterPrice(i)
    setOpenPlatform(false)
  }


  return (
    <section className="catalog-filters">
        <div className="catalog-filters__item">
          <div className="catalog-filters__popular">
            <input type="checkbox" id="catalog-filters__popular"/>
            <label htmlFor="catalog-filters__popular">По популярности:<span onClick={() => setOpenPopular(!openPopular)}>{valuePopular.name}</span><svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L4 4L7 1" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </label>
            {
              openPopular && (
                <div className="modal-popular">
                  <ul>
                    {
                      listPopular.map((obj, i)=>(
                        <li onClick={() => onClickListPopular(obj)} key={i} className={valuePopular.sortPopularProperty === obj.sortPopularProperty ? 'active' : ''}>{obj.name}</li>
                      ))
                    }
                  </ul>
                </div>
              )
            }
          </div>
          <div className="catalog-filters__system">
            <input type="checkbox" id="catalog-filters__system"/>
            <label htmlFor="catalog-filters__system">Платформа:<span onClick={() => setOpenPlatform(!openPlatform)}>{valuePlatform.name}</span><svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L4 4L7 1" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </label>
            {
              openPlatform && (
                <div className="modal-platform">
                  <ul>
                    {
                      listPlatform.map((obj, i)=>(
                        <li onClick={() => onClickListPlatfrom(obj)} key={i} className={valuePlatform.filterPriceProperty === obj.filterPriceProperty ? 'active' : ''}>{obj.name}</li>
                      ))
                    }
                  </ul>
                </div>
              )
            }
          </div>
          <div className="catalog-filters__price">
            <input type="checkbox" id="catalog-filters__price"/>
            <label htmlFor="catalog-filters__price">Цена:<span onClick={() => setOpenPrice(!openPrice)}>{valuePrice.name}</span><svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L4 4L7 1" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </label>
            {
              openPrice && (
                <div className="modal-price">
                  <ul>
                    {
                      listPrice.map((obj, i)=>(
                        <li onClick={() => onClickListPrice(obj)} key={i} className={valuePrice.sortPriceProperty === obj.sortPriceProperty ? 'active' : ''}>{obj.name}</li>
                      ))
                    }
                  </ul>
                </div>
              )
            }
          </div>
        </div>
        <div className="catalog-filters__search">
          <input type="text" placeholder="Поиск среди 200 игр"/>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.66665" cy="7.99819" r="6.66665" stroke="#F59502" strokeWidth="2" />
            <path d="M12.7773 12.4163L17 16.5562" stroke="#F59502" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
    </section>
  )
}

export default CatalogFilters
