import React from 'react'
import TitleRow from '../../../Components/Common/TitlteRow'
import axios from 'axios'
import KatalogItem from '../../../Components/Katalog/KatalogItem'
import Skeleton from '../../../Components/Katalog/Skeleton'
const GameRelated = (categoryGameId) => {
    const [gameData, setGameData] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    React.useEffect(() => {
        axios.get(`https://6297004814e756fe3b26c094.mockapi.io/Games?page=1&limit=4&categoryId=${categoryGameId.categoryGameId}`).then(res => {
            setGameData(res.data)
            setIsLoading(false)
        })
    }, [categoryGameId])

    const gamesArray = gameData.map((obj) => 
        <KatalogItem 
            key={obj.id} 
            priceMain={obj.priceMain}
            priceOld={obj.priceOld}
            id={obj.id}
            title={obj.title} 
            info={obj.info} 
            category={obj.category}
            imageUrl={`../../${obj.imageUrl}`}
        />)
    const skeleton = [...new Array(4)].map((_, index) => <Skeleton key={index}/>)
    
    return (
        <section className="index-katalog">
            <TitleRow mainTitle="Похожие игры" buttonTitle="Все игры" buttonUrl="/catalog"/>
            <div className="flex">
                {isLoading ? skeleton : gamesArray}
            </div>
        </section>
    )
}

export default GameRelated
