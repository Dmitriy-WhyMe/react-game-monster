import { Link } from "react-router-dom"

const index = (props) => {
  return (
    <div className="title-row">
        <h3 className="title-block">{props.mainTitle}</h3>
        <Link to={props.buttonUrl}>{props.buttonTitle}</Link>
    </div>
  )
}

export default index
