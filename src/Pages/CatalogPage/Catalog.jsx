import React from 'react'
import KatalogItem from '../../Components/Katalog/KatalogItem'
import CatalogCategory from './Blocks/CatalogCategory'
import CatalogFilters from './Blocks/CatalogFilters'
import Pagination from '../../Components/Common/Pagination'

const Catalog = () => {
    window.scrollTo(0, 0)
    return (
        <div className="container">
            <h3 className="title-block">Каталог игр</h3>
            <CatalogCategory />
            <CatalogFilters />
            <section className="index-katalog">
                <div className="flex">
                    <KatalogItem 
                        gameUrl="/"
                        imageUrl="img/katalog/Mask Group.png"
                        priceMain="1499"
                        priceOld="3499"
                        titleGame="Witcher 3: Wild Hunt"
                        categoryGame={["RPG","Экшен"]}
                    />
                    <KatalogItem 
                        gameUrl="/"
                        imageUrl="img/katalog/knVdI0VF54j3BCIEr5VGAw.jpeg"
                        priceMain="1499"
                        priceOld="3499"
                        titleGame="Far Cry 5"
                        categoryGame={["RPG","Экшен"]}
                    />
                    <KatalogItem 
                        gameUrl="/"
                        imageUrl="img/katalog/Mask Group (2).png"
                        priceMain="1499"
                        priceOld="3499"
                        titleGame="No Man's Sky"
                        categoryGame={["RPG","Экшен"]}
                    />
                    <KatalogItem 
                        gameUrl="/"
                        imageUrl="img/katalog/thumb-1920-865978.jpg"
                        priceMain="1499"
                        priceOld="3499"
                        titleGame="The Crew 2"
                        categoryGame={["RPG","Экшен"]}
                    />
                    <KatalogItem 
                        gameUrl="/"
                        imageUrl="img/katalog/Mask Group (4).png"
                        priceMain="1499"
                        priceOld="3499"
                        titleGame="FIFA 19"
                        categoryGame={["RPG","Экшен"]}
                    />
                    <KatalogItem 
                        gameUrl="/"
                        imageUrl="img/katalog/Mask Group (5).png"
                        priceMain="1499"
                        priceOld="3499"
                        titleGame="CS:GO"
                        categoryGame={["RPG","Экшен"]}
                    />
                    <KatalogItem 
                        gameUrl="/"
                        imageUrl="img/katalog/Mask Group (6).png"
                        priceMain="1499"
                        priceOld="3499"
                        titleGame="Watch dogs 2"
                        categoryGame={["RPG","Экшен"]}
                    />
                    <KatalogItem 
                        gameUrl="/"
                        imageUrl="img/katalog/Mask Group (7).png"
                        priceMain="1499"
                        priceOld="3499"
                        titleGame="PUBG"
                        categoryGame={["RPG","Экшен"]}
                    />
                    <KatalogItem 
                        gameUrl="/"
                        imageUrl="img/katalog/Mask Group (8).png"
                        priceMain="1499"
                        priceOld="3499"
                        titleGame="DOOM"
                        categoryGame={["RPG","Экшен"]}
                    />
                    <KatalogItem 
                        gameUrl="/"
                        imageUrl="img/katalog/Mask Group (9).png"
                        priceMain="1499"
                        priceOld="3499"
                        titleGame="Bioshock Infinite"
                        categoryGame={["RPG","Экшен"]}
                    />
                    <KatalogItem 
                        gameUrl="/"
                        imageUrl="img/katalog/Mask Group (10).png"
                        priceMain="1499"
                        priceOld="3499"
                        titleGame="Titanfall 2"
                        categoryGame={["RPG","Экшен"]}
                    />
                    <KatalogItem 
                        gameUrl="/"
                        imageUrl="img/katalog/Mask Group (11).png"
                        priceMain="1499"
                        priceOld="3499"
                        titleGame="Dead by Daylight"
                        categoryGame={["RPG","Экшен"]}
                    />
                </div>
            </section>
            <Pagination />
        </div>
    )
}

export default Catalog
