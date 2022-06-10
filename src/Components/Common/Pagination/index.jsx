import ReactPaginate from 'react-paginate';
import style from './Pagination.module.sass'

const index = ({onChangePage, currentPage, countPage}) => {
  return (
    <ReactPaginate
      className={style.pagination}
      breakLabel="..."
      nextLabel="Следующая"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={2}
      forcePage={currentPage - 1}
      previousLabel="Предыдущая"
      renderOnZeroPageCount={null}
    />
  )
}

export default index
