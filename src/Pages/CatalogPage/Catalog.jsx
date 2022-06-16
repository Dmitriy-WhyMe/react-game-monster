import {useEffect} from 'react'
import KatalogItem from '../../Components/Katalog/KatalogItem'
import Skeleton from '../../Components/Katalog/Skeleton'
import CatalogCategory from './Blocks/CatalogCategory'
import CatalogFilters from './Blocks/CatalogFilters'
import Pagination from '../../Components/Common/Pagination'
import { setCurrentPage } from '../../redux/slices/filterSlice'
import { useSelector, useDispatch  } from 'react-redux'
import { fetchGames } from '../../redux/slices/catalogGameSlice'

const Catalog = () => {
    const dispatch = useDispatch()
    const { searchValue } = useSelector(state => state.search)
    const { categoryId, sort, currentPage } = useSelector(state => state.filter)
    const { games, status} = useSelector(state => state.catalogPage)
    const onChangePage = number => {
        dispatch(setCurrentPage(number))
    }
    const getGames = async () => {
        const category = categoryId > 0 ? `categoryId=${categoryId}`: ''
        const search = searchValue ? `&search=${searchValue}`: ''
        const sortBy = sort.sortProperty.replace('-','')
        const order = sort.sortProperty.includes('-') ? 'acs' : 'desc'
        dispatch(fetchGames({
            category:`&${category}`,
            search,
            sortBy:`&sortBy=${sortBy}`,
            order:`&order=${order}`,
            currentPage:`page=${currentPage}`
        }))
        window.scrollTo(0, 0)
    }
    useEffect(() => {
        getGames()
    }, [categoryId,sort.sortProperty,searchValue,currentPage])
    const gamesArray = games.map(obj => <KatalogItem key={obj.id} {...obj}/>)
    const skeleton = [...new Array(12)].map((_, index) => <Skeleton key={index}/>)
    return (
        <div className="container">
            <h3 className="title-block">Каталог игр</h3>
            <CatalogCategory value={categoryId}/>
            <CatalogFilters/>
            <section className="index-katalog">
                {status === 'error'
                    ? <div>Ошибка загрузки игр</div>
                    : <div className="flex">{status === 'loading' ? skeleton : gamesArray}</div>
                }
            </section>
            <Pagination currentPage={currentPage} onChangePage={onChangePage} countPage={gamesArray.length}/>
        </div>
    )
}

export default Catalog
