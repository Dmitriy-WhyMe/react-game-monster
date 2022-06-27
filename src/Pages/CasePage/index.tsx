import TitleRow from '../../Components/Common/TitlteRow'
import style from './CasePage.module.sass'
import { useParams, useNavigate } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
// @ts-ignore-start
import RoulettePro from 'react-roulette-pro';
// @ts-ignore-end
import 'react-roulette-pro/dist/index.css';
import reproductionArray from '../../utils/reproductionArray';

export type GameArrayType = {
    text: string,
    priceGame: number,
    image: string,
    chance: string,
    id: string
}

const Index: React.FC = () => {
    const [start, setStart] = React.useState(false)
    const [spinning, setSpinning] = React.useState(false)
    const [prizeIndex, setPrizeIndex] = React.useState(0)
    const [caseData, setCaseData] = React.useState<{
        title: string,
        slug: string,
        priceMain: number,
        priceOld: number,
        mainImageUrl: string,
        absolutImageUrl: string,
        games: [
            {
                text: string,
                priceGame: number,
                image: string,
                chance: string,
                id: string
            }
        ]
    }>()
    const [prizeList, setPrizeList] = React.useState<GameArrayType[]>([])
    const { id } = useParams()
    const navigate = useNavigate()

    React.useEffect(() => {
        async function fetchCaseData() {
          try {
            const { data } = await axios.get('https://6297004814e756fe3b26c094.mockapi.io/Cases/' + id)
            setCaseData(data)
          } catch (error) {
            alert('Ошибка при получении данных с кейса!')
            navigate('/')
          }
        }
        fetchCaseData()
        // eslint-disable-next-line
    }, [])
    
    const arrGames: GameArrayType[] = caseData !== undefined ? caseData.games : []
    const API = {
        getPrizeIndex: async () => {
          const randomPrizeIndex = Math.floor(Math.random() * arrGames.length * 5)
          return randomPrizeIndex
        },
    }

    React.useEffect(() => {
        const reproducedArray = [
          ...reproductionArray(arrGames, arrGames.length * 5),
        ]
        const list = [...reproducedArray].map((item) => ({
          ...item
        }))
        setPrizeList(list)
        return
        // eslint-disable-next-line
    }, [arrGames])

    React.useEffect(() => {
        if (!prizeIndex || start) {
          return
        }
        setStart(true)
        // eslint-disable-next-line
    }, [prizeIndex, start])

    const handleStart = () => {
        const prepare = async () => {
            const newPrizeIndex = await API.getPrizeIndex()
            setPrizeIndex(newPrizeIndex)
            setStart(false)
            const { id } = prizeList[newPrizeIndex]
            alert(id)
        }
        prepare()
        setSpinning(true)
    }
    
    const handlePrizeDefined = () => {
        setSpinning(false)
    }

    if (!caseData) {
        return <>'Загрузка данных'</>
    }

    return (
        <div className="container">
            <TitleRow mainTitle={"Испытай свою удачу в кейсе: " + caseData.title} buttonTitle="Все кейсы" buttonUrl="/"/>
            <div className={style.roulletka}>
                <RoulettePro
                    start={start}
                    prizes={prizeList}
                    prizeIndex={prizeIndex}
                    onPrizeDefined={handlePrizeDefined}
                    options={{ stopInCenter: true }}
                    designOptions={{
                        withoutAnimation: true,
                        prizeItemWidth: 350,
                        prizeItemHeight: 268,
                    }}
                />    
                <button className={style.btn} onClick={handleStart}>Вращать</button>
            </div>
            <section className={style.block}>
                <h2>Содержание кейса</h2>
                <div className={style.flex}>
                    {caseData.games.map((value, index) =>
                        <div className={style.item} key={index}>
                            <h3>{value.text}</h3>
                            <div className={style.price}>{value.priceGame}₽</div>
                            <img src={value.image} alt=""/>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Index
