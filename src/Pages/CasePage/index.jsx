import TitleRow from '../../Components/Common/TitlteRow'
import style from './CasePage.module.sass'

const Index = ({ gamesArray, caseTitle }) => {
    return (
        <div className="container">
            <TitleRow mainTitle={"Испытай свою удачу в кейсе: " + caseTitle} buttonTitle="Все кейсы" buttonUrl="/"/>
            <section className={style.block}>
                <h2>Содержание кейса</h2>
                <div className={style.flex}>
                    {gamesArray.map((value) =>
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
