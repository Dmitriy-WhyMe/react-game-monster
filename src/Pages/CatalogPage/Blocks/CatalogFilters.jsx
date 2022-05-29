import React from 'react'

const CatalogFilters = () => {
  return (
    <section className="catalog-filters">
        <div className="catalog-filters__item">
          <div className="catalog-filters__all">
            <input type="checkbox" id="catalog-filters__all"/>
            <label htmlFor="catalog-filters__all">Все игры<svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L4 4L7 1" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </label>
          </div>
          <div className="catalog-filters__system">
            <input type="checkbox" id="catalog-filters__system"/>
            <label htmlFor="catalog-filters__system">Платформа<svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L4 4L7 1" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </label>
          </div>
          <div className="catalog-filters__price">
            <input type="checkbox" id="catalog-filters__price"/>
            <label htmlFor="catalog-filters__price">Цена<svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L4 4L7 1" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </label>
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
