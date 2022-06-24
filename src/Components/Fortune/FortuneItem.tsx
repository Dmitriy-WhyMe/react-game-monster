import { useDispatch  } from 'react-redux'
import { setSlugValue, setGamesArray, setCaseTitle } from '../../redux/slices/casesSlice'
import { useNavigate } from 'react-router-dom';
import React from 'react'

type FortuneItemProps = {
    slug: string,
    games: [],
    title: string,
    mainImageUrl: string,
    absolutImageClass: string,
    absolutImageUrl: string,
    titleClass: string,
    priceMain: number,
    priceOld: number
}

const FortuneItem: React.FC<FortuneItemProps> = ({slug,games,title,mainImageUrl,absolutImageClass,absolutImageUrl,titleClass,priceMain,priceOld}) => {
    const router = useNavigate()
    const dispatch = useDispatch()
    const onChangeSlug = (slug: string, games: [], title: string) => {
        dispatch(setSlugValue(slug))
        dispatch(setGamesArray(games))
        dispatch(setCaseTitle(title))
        router(slug)
    }
    return (
        <div className="fortune__item" onClick={() => onChangeSlug(slug, games, title)}>
            <img className="fortune__img" src={mainImageUrl} alt=""/>
            <img className={absolutImageClass} src={absolutImageUrl} alt=""/>
            <div className={titleClass}>{title}</div>
            <div className="fortune__desc">
                <div className="fortune__desc-item">
                    <span>2</span> игры
                </div>
                <div className="fortune__desc-item">
                    <span>{Math.round((85 / priceMain) * 100)}%</span> max профит
                </div>
                <div className="fortune__desc-item">игры от <span>$ 15</span></div>
            </div>
            <div className="fortune__discount">-{100-(Math.round((priceMain * 100) / priceOld))}%</div>
            <div className="fortune__price">
                <div className="fortune__price-main">$ {priceMain}</div>
                <div className="fortune__price-old">$ {priceOld}</div>
            </div>
        </div>
    )
}

export default FortuneItem
