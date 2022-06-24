import { useEffect, useState } from 'react'
import axios from 'axios'
import FortuneItem from '../../../Components/Fortune/FortuneItem'
import React from 'react'

type Cases = {
  key: string,
  slug: string
  games: []
  title: string
  priceMain: number
  priceOld: number
  mainImageUrl: string
  absolutImageUrl: string
  absolutImageClass: string
  titleClass: string
}

const Fortune: React.FC = () => {
  const [cases, setCases] = useState<Cases[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    axios.get(`https://6297004814e756fe3b26c094.mockapi.io/Cases?`).then(res => {
        setCases(res.data)
        setIsLoading(false)
    })
  }, [])
  return (
    <section className="fortune">
        <h3 className="title-block">Испытай удачу</h3>
        <div className="flex">
          {isLoading === false
            ? cases.map((value, index) =>
              <FortuneItem
                key={index}
                slug={value.slug}
                games={value.games}
                title={value.title}
                priceMain={value.priceMain}
                priceOld={value.priceOld}
                mainImageUrl={value.mainImageUrl}
                absolutImageUrl={value.absolutImageUrl}
                absolutImageClass={value.absolutImageClass}
                titleClass={value.titleClass}
              />)
            : false
          }
        </div>
      </section>
  )
}

export default Fortune
