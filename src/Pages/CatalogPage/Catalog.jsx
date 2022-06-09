import React from 'react'
import { useSelector } from 'react-redux'
import KatalogItem from '../../Components/Katalog/KatalogItem'
import Skeleton from '../../Components/Katalog/Skeleton'
import CatalogCategory from './Blocks/CatalogCategory'
import CatalogFilters from './Blocks/CatalogFilters'
import Pagination from '../../Components/Common/Pagination'

const Catalog = () => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [games, setGames] = React.useState([])
    const { searchValue } = useSelector(state => state.search)
    const { categoryId, sortPopular, sortPrice } = useSelector(state => state.filter)

    React.useEffect(() => {
        const category = categoryId > 0 ? `categoryId=${categoryId}`: ''
        const search = searchValue ? `&search=${searchValue}`: ''
        const sortBy = sortPopular.sortProperty.replace('-','') && sortPrice.sortProperty.replace('-','')
        const order = sortPopular.sortProperty.includes('-') ? 'acs' : 'desc' && sortPrice.sortProperty.includes('-') ? 'acs' : 'desc'
        fetch(`
            https://6297004814e756fe3b26c094.mockapi.io/Games?page=${currentPage}&limit=8&${category}${search}&sortBy=${sortBy}&order=${order}
        `)
        .then((res) => res.json()) 
        .then(arr => {
            setGames(arr)
            setIsLoading(false)
        })
        window.scrollTo(0, 0)

    }, [categoryId, sortPopular, sortPrice, searchValue, currentPage])

    const gamesArray = games.map(obj => <KatalogItem key={obj.id} {...obj}/>)
    const skeleton = [...new Array(12)].map((_, index) => <Skeleton key={index}/>)

    return (
        <div className="container">
            <h3 className="title-block">Каталог игр</h3>
            <CatalogCategory value={categoryId}/>
            <CatalogFilters/>
            <section className="index-katalog">
                <div className="flex">
                    {isLoading ? skeleton : gamesArray}
                </div>
            </section>
            <Pagination onChangePage={number => setCurrentPage(number)}/>
        </div>
    )
}

export default Catalog
