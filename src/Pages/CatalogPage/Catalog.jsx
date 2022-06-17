import {useEffect} from 'react'
import KatalogItem from '../../Components/Katalog/KatalogItem'
import Skeleton from '../../Components/Katalog/Skeleton'
import CatalogCategory from './Blocks/CatalogCategory'
import CatalogFilters from './Blocks/CatalogFilters'
import Pagination from '../../Components/Common/Pagination'
import { selectFilter, setCurrentPage } from '../../redux/slices/filterSlice'
import { useSelector, useDispatch  } from 'react-redux'
import { fetchGames, selectCatalogPage } from '../../redux/slices/catalogGameSlice'
import { selectSearch } from '../../redux/slices/searchSlice'

const Catalog = () => {
    const dispatch = useDispatch()
    const { searchValue } = useSelector(selectSearch)
    const { categoryId, sort, currentPage } = useSelector(selectFilter)
    const { games, status } = useSelector(selectCatalogPage)
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
        // eslint-disable-next-line
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
