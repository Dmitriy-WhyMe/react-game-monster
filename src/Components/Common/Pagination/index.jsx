import ReactPaginate from 'react-paginate';
import style from './Pagination.module.sass'

const index = ({onChangePage}) => {
  return (
    <ReactPaginate
      className={style.pagination}
      breakLabel="..."
      nextLabel="Следующая"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={2}
      previousLabel="Предыдущая"
      renderOnZeroPageCount={null}
    />
  )
}

export default index
