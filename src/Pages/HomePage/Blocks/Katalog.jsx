import React from 'react'
import TitleRow from '../../../Components/Common/TitlteRow'
import KatalogItem from '../../../Components/Katalog/KatalogItem'


function Katalog() {
  const [games, setGames] = React.useState([])
  React.useEffect(() => {
    fetch('https://6297004814e756fe3b26c094.mockapi.io/Games').then((res) => res.json()) 
    .then(arr => {
        setGames(arr)
    })
  }, [])
  
  return (
    <section className="index-katalog">
        <TitleRow mainTitle="Каталог игр" buttonTitle="Все игры" buttonUrl="/catalog"/>
        <div className="flex">
          {
            games.map((obj) => (
                <KatalogItem key={obj.id} {...obj}/>
            ))
          }
        </div>
      </section>
  )
}

export default Katalog
