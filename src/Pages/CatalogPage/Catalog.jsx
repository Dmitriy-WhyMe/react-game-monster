import React from 'react'
import KatalogItem from '../../Components/Katalog/KatalogItem'
import Skeleton from '../../Components/Katalog/Skeleton'
import CatalogCategory from './Blocks/CatalogCategory'
import CatalogFilters from './Blocks/CatalogFilters'
import Pagination from '../../Components/Common/Pagination'

const Catalog = () => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [games, setGames] = React.useState([])
    const [categoryId, setCategoryId] = React.useState(0)

    const [sortPopularType, setSortPopularType] = React.useState({
        name: 'Desk',
        sortPopularProperty: 'rating',
    })

    const [sortPriceType, setSortPriceType] = React.useState({
        name: 'Desk',
        sortPriceProperty: 'priceMain',
    })

    const [filterType, setFilterType] = React.useState({
        name: 'Все',
        filterPriceProperty: 'Все',
    })

    React.useEffect(() => {

        const category = categoryId > 0 ? `categoryId=${categoryId}`: ''

        const sortBy = sortPopularType.sortPopularProperty.replace('-','') && sortPriceType.sortPriceProperty.replace('-','')
        const order = sortPopularType.sortPopularProperty.includes('-') ? 'acs' : 'desc' && sortPriceType.sortPriceProperty.includes('-') ? 'acs' : 'desc'
        const filter = filterType.filterPriceProperty
        
        //const sortByPrice = sortPriceType.sortPriceProperty.replace('-','')
        //const orderPrice = sortPriceType.sortPriceProperty.includes('-') ? 'acs' : 'desc'

        
        fetch(`https://6297004814e756fe3b26c094.mockapi.io/Games?${category}&platform=${filter}&sortBy=${sortBy}&order=${order}`)
        .then((res) => res.json()) 
        .then(arr => {
            setGames(arr)
            setIsLoading(false)
        })
        window.scrollTo(0, 0)

    }, [categoryId, filterType, sortPopularType, sortPriceType])

    

    return (
        <div className="container">
            <h3 className="title-block">Каталог игр</h3>
            <CatalogCategory value={categoryId} onChangeCategory={(index)=>setCategoryId(index)}/>
            <CatalogFilters 
                valuePopular={sortPopularType} 
                onChangeSortPopular={(index)=>setSortPopularType(index)}
                valuePlatform={filterType} 
                onChangeFilterPrice={(index)=>setFilterType(index)}
                valuePrice={sortPriceType} 
                onChangeSortPrice={(index)=>setSortPriceType(index)}
            />
            <section className="index-katalog">
                <div className="flex">
                    {isLoading
                        ? [...new Array(12)].map((_, index) => <Skeleton key={index}/>) 
                        : games.map(obj => <KatalogItem key={obj.id} {...obj}/>)
                    }
                </div>
            </section>
            <Pagination />
        </div>
    )
}

export default Catalog
