import React from 'react'
import axios from 'axios'

import KatalogItem from '../../Components/Katalog/KatalogItem'
import Skeleton from '../../Components/Katalog/Skeleton'
import CatalogCategory from './Blocks/CatalogCategory'
import CatalogFilters from './Blocks/CatalogFilters'
import Pagination from '../../Components/Common/Pagination'

import { setCurrentPage } from '../../redux/slices/filterSlice'
import { useSelector, useDispatch  } from 'react-redux'

const Catalog = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = React.useState(true)
    const [games, setGames] = React.useState([])
    const { searchValue } = useSelector(state => state.search)
    const { categoryId, sortPopular, sortPrice, currentPage } = useSelector(state => state.filter)

    const onChangePage = number => {
        dispatch(setCurrentPage(number))
    }

    React.useEffect(() => {
        const category = categoryId > 0 ? `categoryId=${categoryId}`: ''
        const search = searchValue ? `&search=${searchValue}`: ''
        const sortBy = sortPopular.sortProperty.replace('-','') && sortPrice.sortProperty.replace('-','')
        const order = sortPopular.sortProperty.includes('-') ? 'acs' : 'desc' && sortPrice.sortProperty.includes('-') ? 'acs' : 'desc'
        axios.get(`
            https://6297004814e756fe3b26c094.mockapi.io/Games?page=${currentPage}&limit=8&${category}${search}&sortBy=${sortBy}&order=${order}
        `).then(res => {
            setGames(res.data)
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
            <Pagination currentPage={currentPage} onChangePage={onChangePage} countPage={gamesArray.length }/>
        </div>
    )
}

export default Catalog
