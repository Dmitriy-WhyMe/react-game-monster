import { useEffect, useState } from 'react'
import TitleRow from '../../Components/Common/TitlteRow'
import KatalogItem from '../../Components/Katalog/KatalogItem'
import Skeleton from '../../Components/Katalog/Skeleton'

import axios from 'axios'

function Katalog({ countGames, url }) {
  const [isLoading, setIsLoading] = useState(true)
  const [games, setGames] = useState([])
  useEffect(() => {
    axios.get(`https://6297004814e756fe3b26c094.mockapi.io/Games?page=1&limit=${countGames}`).then(res => {
      setGames(res.data)
        setIsLoading(false)
    })
  }, [countGames])
  
  return (
    <section className="index-katalog">
        <TitleRow mainTitle="Каталог игр" buttonTitle="Все игры" buttonUrl="/catalog"/>
        <div className="flex">
          {isLoading
            ? [...new Array(countGames)].map((_, index) => <Skeleton key={index}/>) 
            : games.map(obj => <KatalogItem key={obj.id} url={url} {...obj}/>)
          }
        </div>
    </section>
  )
}

export default Katalog
