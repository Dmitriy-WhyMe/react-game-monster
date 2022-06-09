import React from 'react'
import Search from '../../../Components/Common/Search'
import { useSelector, useDispatch  } from 'react-redux'
import { setSortPopular, setSortPrice } from '../../../redux/slices/filterSlice'

const CatalogFilters = () => {
  const dispatch = useDispatch()
  const { sortPopular, sortPrice } = useSelector(state => state.filter)

  const [openPopular, setOpenPopular] = React.useState(false)
  const listPopular = [
    {name: 'Desk', sortProperty: 'rating'}, 
    {name: 'Asc', sortProperty: '-rating'}, 
  ]
  const onClickListPopular = (obj) => {
    dispatch(setSortPopular(obj))
    setOpenPopular(false)
  }

  const [openPrice, setOpenPrice] = React.useState(false)
  const listPrice = [
    {name: 'Desk', sortProperty: 'priceMain'}, 
    {name: 'Asc', sortProperty: '-priceMain'}, 
  ]
  const onClickListPrice = (obj) => {
    dispatch(setSortPrice(obj))
    setOpenPrice(false)
  }

  return (
    <section className="catalog-filters">
        <div className="catalog-filters__item">
          <div className="catalog-filters__popular">
            <input type="checkbox" id="catalog-filters__popular"/>
            <label htmlFor="catalog-filters__popular">По популярности:<span onClick={() => setOpenPopular(!openPopular)}>{sortPopular.name}</span><svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L4 4L7 1" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </label>
            {
              openPopular && (
                <div className="modal-popular">
                  <ul>
                    {
                      listPopular.map((obj, i)=>(
                        <li onClick={() => onClickListPopular(obj)} key={i} className={sortPopular.sortProperty === obj.sortProperty ? 'active' : ''}>{obj.name}</li>
                      ))
                    }
                  </ul>
                </div>
              )
            }
          </div>
          <div className="catalog-filters__price">
            <input type="checkbox" id="catalog-filters__price"/>
            <label htmlFor="catalog-filters__price">Цена:<span onClick={() => setOpenPrice(!openPrice)}>{sortPrice.name}</span><svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L4 4L7 1" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </label>
            {
              openPrice && (
                <div className="modal-price">
                  <ul>
                    {
                      listPrice.map((obj, i)=>(
                        <li onClick={() => onClickListPrice(obj)} key={i} className={sortPrice.sortProperty === obj.sortProperty ? 'active' : ''}>{obj.name}</li>
                      ))
                    }
                  </ul>
                </div>
              )
            }
          </div>
        </div>
        <Search/>
    </section>
  )
}

export default CatalogFilters
