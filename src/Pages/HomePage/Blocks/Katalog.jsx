import React from 'react'
import TitleRow from '../../../Components/Common/TitlteRow'
import KatalogItem from '../../../Components/Katalog/KatalogItem'
import Skeleton from '../../../Components/Katalog/Skeleton'


function Katalog() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [games, setGames] = React.useState([])
  React.useEffect(() => {
    fetch('https://6297004814e756fe3b26c094.mockapi.io/Games').then((res) => res.json()) 
    .then(arr => {
        setGames(arr)
        setIsLoading(false)
    })
  }, [])
  
  return (
    <section className="index-katalog">
        <TitleRow mainTitle="Каталог игр" buttonTitle="Все игры" buttonUrl="/catalog"/>
        <div className="flex">
          {isLoading
            ? [...new Array(12)].map((_, index) => <Skeleton key={index}/>) 
            : games.map(obj => <KatalogItem key={obj.id} {...obj}/>)
          }
        </div>
      </section>
  )
}

export default Katalog
