import { useDispatch  } from 'react-redux'
import { setSlugValue, setGamesArray, setCaseTitle } from '../../redux/slices/casesSlice'
import { useNavigate } from 'react-router-dom';

const FortuneItem = (props) => {
    const router = useNavigate()
    const dispatch = useDispatch()
    const onChangeSlug = (slug, games, title) => {
        dispatch(setSlugValue(slug))
        dispatch(setGamesArray(games))
        dispatch(setCaseTitle(title))
        router(slug)
    }
    return (
        <div className="fortune__item" onClick={() => onChangeSlug(props.slug, props.games, props.title)}>
            <img className="fortune__img" src={props.mainImageUrl} alt=""/>
            <img className={props.absolutImageClass} src={props.absolutImageUrl} alt=""/>
            <div className={props.titleClass}>{props.title}</div>
            <div className="fortune__desc">
                <div className="fortune__desc-item">
                    <span>2</span> игры
                </div>
                <div className="fortune__desc-item">
                    <span>{Math.round((85 / props.priceMain) * 100)}%</span> max профит
                </div>
                <div className="fortune__desc-item">игры от <span>$ 15</span></div>
            </div>
            <div className="fortune__discount">-{100-(Math.round((props.priceMain * 100) / props.priceOld))}%</div>
            <div className="fortune__price">
                <div className="fortune__price-main">$ {props.priceMain}</div>
                <div className="fortune__price-old">$ {props.priceOld}</div>
            </div>
        </div>
    )
}

export default FortuneItem
