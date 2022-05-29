import React from 'react'

const index = () => {
  return (
    <section className="pagination">
        <button className="pagination__start">В начало</button>
        <div className="flex">
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <div className="pagination__cirlce">...</div>
            <button href="#">30</button>
        </div>
        <button className="pagination__end">В конец</button>
    </section>
  )
}

export default index
