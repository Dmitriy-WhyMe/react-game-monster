import React from 'react'
import KatalogItem from '../../Components/Katalog/KatalogItem'
import CatalogCategory from './Blocks/CatalogCategory'
import CatalogFilters from './Blocks/CatalogFilters'
import Pagination from '../../Components/Common/Pagination'

const Catalog = () => {
    window.scrollTo(0, 0)

    const [games, setGames] = React.useState([])
    React.useEffect(() => {
        fetch('https://6297004814e756fe3b26c094.mockapi.io/Games').then((res) => res.json()) 
        .then(arr => {
            setGames(arr)
        })
    }, [])

    

    return (
        <div className="container">
            <h3 className="title-block">Каталог игр</h3>
            <CatalogCategory />
            <CatalogFilters />
            <section className="index-katalog">
                <div className="flex">
                    {
                        games.map((obj) => (
                            <KatalogItem key={obj.id} {...obj}/>
                        ))
                    }
                </div>
            </section>
            <Pagination />
        </div>
    )
}

export default Catalog
