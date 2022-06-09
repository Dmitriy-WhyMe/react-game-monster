import { useSelector, useDispatch  } from 'react-redux'
import { setSearchValue } from '../../../redux/slices/searchSlice'

const Search = () => {
    const { searchValue } = useSelector(state => state.search)
    const dispatch = useDispatch()
    return (
        <div className="catalog-filters__search">
            <input
                value={searchValue}
                onChange={(e) => dispatch(setSearchValue(e.target.value))}
                placeholder='Поиск среди игр'/>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.66665" cy="7.99819" r="6.66665" stroke="#F59502" strokeWidth="2" />
                <path d="M12.7773 12.4163L17 16.5562" stroke="#F59502" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </div>
    )
}

export default Search
