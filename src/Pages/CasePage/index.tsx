import TitleRow from '../../Components/Common/TitlteRow'
import style from './CasePage.module.sass'
import { useParams, useNavigate } from 'react-router-dom'
import React from 'react'
import axios from 'axios'

const Index: React.FC = () => {
    const [caseData, setCaseData] = React.useState<{
        title: string,
        slug: string,
        priceMain: number,
        priceOld: number,
        mainImageUrl: string,
        absolutImageUrl: string,
        games: [
            {
                titleGame: string,
                priceGame: number,
                imageGame: string
            }
        ]
    }>()
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

    if (!caseData) {
        return <>'Загрузка данных'</>
    }

    return (
        <div className="container">
            <TitleRow mainTitle={"Испытай свою удачу в кейсе: " + caseData.title} buttonTitle="Все кейсы" buttonUrl="/"/>
            
            <section className={style.block}>
                <h2>Содержание кейса</h2>
                <div className={style.flex}>
                    {caseData.games.map((value) =>
                        <div className={style.item} key={value.titleGame}>
                            <h3>{value.titleGame}</h3>
                            <div className={style.price}>{value.priceGame}₽</div>
                            <img src={'../../' + value.imageGame} alt=""/>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Index
