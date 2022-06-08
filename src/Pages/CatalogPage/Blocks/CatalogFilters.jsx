import React from 'react'
import Search from '../../../Components/Common/Search'

const CatalogFilters = ({
  valuePopular, 
  onChangeSortPopular,
  valuePrice,
  onChangeSortPrice,
  searchValue,
  setSearchValue
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
        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
    </section>
  )
}

export default CatalogFilters
